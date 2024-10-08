import React, { useEffect, useState, useRef } from "react";
import { renderMatches, useLocation, useNavigate } from 'react-router-dom';
import * as S from "../styles/page/Register.stlye";
import * as L from "../styles/page/Login.stlye";
import icon_profile from "../assets/Login/profile.png";
import icon from "../assets/Login/icon_edit.png";
import Back from "../components/Back";
import { useRecoilState } from 'recoil';
import { ProfileState } from "../Recoil/TokenAtom";
import axios from 'axios';

export default function RegisterPageEmail() {
    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState("");
    const [hideEmail, setHideEmail] = useState(false);
    const [onSocial, setonSocial] = useState(false);
    const fileInputRef = useRef(null);
    const isFormValid = userId !== '' && pwd !== '' && name !== '' && age !== "";
    const formData = new FormData();
    const navigate = useNavigate();
    const location = useLocation();
    // 받은 주소
    const message = location.state || {};
    // 프로필 이미지
    const [profileImage, setProfileImage] = useState(icon_profile);
    // 이미지 설정
    const handleImageChange = (event) => {
        fileInputRef.current.click();
        const fileInput = document.getElementById('fileInput');
        const fileView = document.getElementById('fileView');
        fileInput.addEventListener('change', function (event) {
            if (fileInput.files && fileInput.files[fileInput.files.length - 1]) {
                const reader = new FileReader();
                reader.onload = function (event) {
                    const imageURL = event.target.result;
                    setProfileImage(imageURL);
                    
                    fileView.style.backgroundImage = `url(${imageURL})`;
                };
                reader.readAsDataURL(fileInput.files[fileInput.files.length - 1]);
            }
        });
    };


    // 로그인 여부 확인
    const login = sessionStorage.getItem('login');
    useEffect(() => {
        // login 확인
        if (login) {
            alert("이미 로그인 됨.");
            navigate('/main', { replace: true, state: { redirectedFrom: window.location.pathname } });
        }
        else {
            // 소셜 로그인시 이메일, 비밀번호 숨김
            if ("social" in message || localStorage.getItem('jwtToken')) {
                setUserId("social");
                setPwd("social");
                setHideEmail(true);
                setEmailCheck(true);
                setonSocial(true);
            }
        }
    }, []);
    async function addFormdata() {
        // 데이터 설정
        formData.append('username', name);
        formData.append('email', userId);
        formData.append('password', pwd);
        formData.append('age_group', age);
        formData.append('role', 'ROLE_USER');
        // 이미지 설정
        if (profileImage == icon_profile || onSocial) {
            try {
                const response = await fetch(icon_profile);
                const blob = await response.blob();
                const file = new File([blob], "profile.png", { type: blob.type });
                formData.append('profileImage', file);
            } catch (error) {
                alert('Error converting image to Blob:', error);
            }
        } else {
            const fileInput = document.getElementById('fileInput');
            const file = fileInput.files[fileInput.files.length - 1];
            formData.append('profileImage', file);
        }
    }
    // register 테스트
    const tryRegister = async () => {
        if (emailCheck) {
            if (nameCheck) {
                // 데이터 추가
                await addFormdata();
                // 소셜 회원가입
                if (onSocial) {
                    try {
                        // 회원가입
                        const data = new FormData();
                        data.append('username', name);
                        data.append('age_group', age);
                        if (profileImage == icon_profile) {
                                data.append('profileImage', icon_profile);
                        } else {
                            const fileInput = document.getElementById('fileInput');
                            const file = fileInput.files[fileInput.files.length - 1];
                            data.append('profileImage', file);
                        }
                        const jwtToken = localStorage.getItem('jwtToken');
                        const response = await axios.put('https://sub.skuhackathon.shop/members/social/signup'
                            , data
                            , {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                    'accept': '*/*',
                                    'Authorization': `Bearer ${jwtToken}`,
                                },
                            });

                        //이동 및 데이터 전송 profileImage
                        sessionStorage.setItem('token', jwtToken);
                        sessionStorage.setItem('profileImage', profileImage);
                        sessionStorage.setItem('user', JSON.stringify({
                            userId: response.data.result.memberId,
                            email: userId,
                            ageGroup: age,
                            userName: response.data.result.username,
                            memberKeyword: [],
                            profileImage: profileImage
                        }));
                        navigate('/register/word',
                            {
                                replace: true,
                                state:
                                {
                                    userId,
                                    pwd,
                                    name,
                                    age,
                                    profileImage,
                                }
                            });
                    } catch (error) {
                        console.error('Error fetching data:', error);
                        if (error.response.data.result.email)
                            alert(error.response.data.data.result.email);
                        if (error.response.data.result.password)
                            alert(error.response.data.result.password);
                        if (error.response.data.result.profileImage)
                            alert("프로필 이미지 등록에 실패했습니다.");
                        if (error.response.data.code == "member4005") {
                            alert("이미 존재하는 계정입니다.");
                        }
                    }
                }
                // 통상 이메일 회원가입
                else {
                    axios.post('https://sub.skuhackathon.shop/members/signup'
                        , formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                            }
                        })
                        .then(response => {

                            //이동 및 데이터 전송
                            sessionStorage.setItem('user', JSON.stringify({
                                userId: response.data.result.memberId,
                                email: userId,
                                ageGroup: age,
                                userName: response.data.result.username,
                                memberKeyword: [],
                                profileImage: profileImage
                            }));
                            sessionStorage.setItem('profileImage', profileImage);
                            navigate('/register/word',
                                {
                                    replace: true,
                                    state:
                                    {
                                        userId,
                                        pwd,
                                        name,
                                        age,
                                        profileImage,
                                    }
                                });
                        })
                        .catch(error => {
                            console.error('Error fetching data:', error.response.data);
                            if (error.response.data.result.email)
                                alert(error.response.data.data.result.email);
                            if (error.response.data.result.password)
                                alert(error.response.data.result.password);
                            if (error.response.data.result.profileImage)
                                alert("프로필 이미지 등록에 실패했습니다.");
                            if (error.response.data.code == "member4005") {
                                alert("이미 존재하는 계정입니다.");
                            }
                        });
                }
            } else {
                alert('닉네임 중복확인을 해주세요');
            }
        }
        else {
            alert('이메일 중복확인을 해주세요');
        }
    };
    // 중복확인 - email
    const [emailCheck, setEmailCheck] = useState(false);
    const checkEmail = () => {
        axios.get(`https://sub.skuhackathon.shop/members/checkEmail/${userId}`)
            .then(response => {
                if (response.data.code == "COMMON200") {
                    // 중복이 없다면(false)
                    if (!response.result)
                        setEmailCheck(true);
                    else
                        alert('이미 존재하는 이메일입니다.');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setEmailCheck(false);
                alert('이미 존재하는 이메일입니다.');
            });

    };
    // 중복확인 - name
    const [nameCheck, setNameCheck] = useState(false);
    const checkName = () => {
        if (name.length <= 8) {
            axios.get(`https://sub.skuhackathon.shop/members/checkUsername/${name}`)
                .then(response => {
                    // 중복이 없다면(false)
                    if (!response.result)
                        setNameCheck(true);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    setNameCheck(false);
                    alert('이미 존재하는 닉네임입니다.');
                });
        }
        else {
            alert('닉네임은 8글자 이내로 입력해주세요');
        }
    }
    return (
        <>
            <Back to="/register"></Back>
            <S.RegisteContainer>

                <h6>프로필을</h6>
                <h6>입력해주세요</h6>

                <S.ProfileContainer>
                    <S.Profile
                        id="fileView"
                        alt="Profile"
                    />
                    <S.HiddenInput
                        id="fileInput"
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        ref={fileInputRef}
                    />
                    <S.btnEdit
                        htmlFor="imageInput"
                        alt="imageInput"
                        src={icon}
                        onClick={handleImageChange} />
                </S.ProfileContainer>

                <L.InputText
                    disabled={hideEmail}>
                    이메일
                </L.InputText>
                <L.InputContainer
                    disabled={hideEmail}>
                    <L.InputLine
                        type="text"
                        value={userId}
                        autoFocus
                        placeholder="이메일을 입력하세요"
                        onChange={(e) => { setUserId(e.target.value); setEmailCheck(false); }}
                    />
                    <L.btnCheck
                        $ischecked={emailCheck.toString()}
                        onClick={checkEmail}>
                        {emailCheck ? "확인 완료" : "중복 확인"}
                    </L.btnCheck>
                </L.InputContainer>
                <L.InputText
                    disabled={hideEmail}>
                    비밀번호
                </L.InputText>
                <L.InputContainer
                    disabled={hideEmail}>

                    <L.InputLine
                        type="password"
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        placeholder="비밀번호 입력하세요"
                    />
                </L.InputContainer>
                <L.InputText>
                    닉네임
                </L.InputText>
                <L.InputContainer>
                    <L.InputLine
                        type="text"
                        value={name}
                        onChange={(e) => { setName(e.target.value); setNameCheck(false); }}
                        placeholder="8글자 내로 입력"
                    />
                    <L.btnCheck
                        $ischecked={nameCheck.toString()}
                        onClick={checkName}>
                        {nameCheck ? "확인 완료" : "중복 확인"}
                    </L.btnCheck>
                </L.InputContainer>
                <L.InputText>나이</L.InputText>
                <S.RadioGroupContainer>
                    <S.RadioButtonInput
                        selected={age == "10대"}
                        onClick={() => setAge("10대")}>
                        10대
                    </S.RadioButtonInput>
                    <S.RadioButtonInput
                        selected={age == "20대"}
                        onClick={() => setAge("20대")}
                    >
                        20대
                    </S.RadioButtonInput>
                    <S.RadioButtonInput
                        selected={age === "30대"}
                        onClick={() => setAge("30대")}
                    >
                        30대
                    </S.RadioButtonInput>
                    <S.RadioButtonInput
                        selected={age === "40대"}
                        onClick={() => setAge("40대")}
                    >
                        40대
                    </S.RadioButtonInput>
                    <S.RadioButtonInput
                        selected={age === "50대"}
                        onClick={() => setAge("50대")}
                    >
                        50대
                    </S.RadioButtonInput>
                </S.RadioGroupContainer>
                <L.InputSubmit
                    onClick={tryRegister}
                    disabled={!isFormValid}>
                    <p>입력완료</p>
                </L.InputSubmit>
            </S.RegisteContainer >
        </>
    );
}