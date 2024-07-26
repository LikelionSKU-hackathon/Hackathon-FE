import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from "../styles/page/Register.stlye";
import * as L from "../styles/page/Login.stlye";
import icon_profile from "../assets/Login/profile.png";
import icon from "../assets/Login/icon_edit.png";
import Back from "../components/Back";
import { useRecoilState } from 'recoil';
import { ProfileState } from "../Recoil/TokenAtom";

export default function RegisterPageEmail() {
    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState("");
    const fileInputRef = useRef(null);
    const isFormValid = userId !== '' && pwd !== '' && name !== '' && age !== "";
    // recoil
    const [profile, setProfile] = useRecoilState(ProfileState);
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

    // register 테스트
    const tryRegister = (e) => {
        if (emailCheck) {
            if (nameCheck) {
                console.log('button clicked');
                e.preventDefault();
                console.log(`userId: ${userId}, pwd: ${pwd}, name: ${name}, age: ${age}`);
                if(profileImage !== icon_profile)
                    setProfileImage(window.getComputedStyle(fileView).backgroundImage);
                //이동 및 데이터 전송
                navigate('/register/word',
                    {
                        state:
                        {
                            userId,
                            pwd,
                            name,
                            age,
                            profileImage,
                        }
                    });

                // recoil 저장
                // setProfile({
                //     id: userId,
                //     nickname: name,
                //     age: age,
                //     profilePicture: profileImage
                // });
                // console.log(profile);
                //navigate('/register/word');
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
        console.log('check email');
        console.log(`userId: ${userId}, pwd: ${pwd}, name: ${name}, age: ${age}`);
        setEmailCheck(true);
    };
    // 중복확인 - name
    const [nameCheck, setNameCheck] = useState(false);
    const checkName = () => {
        if (name.length <= 8) {
            setNameCheck(true);
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

                <L.InputText>이메일</L.InputText>
                <L.InputContainer>
                    <L.InputLine
                        type="text"
                        value={userId}
                        autoFocus
                        placeholder="이메일을 입력하세요"
                        onChange={(e) => {setUserId(e.target.value); setEmailCheck(false);}}
                    />
                    <L.btnCheck
                        $ischecked={emailCheck.toString()}
                        onClick={checkEmail}>
                        {emailCheck ? "확인 완료" : "중복 확인"}
                    </L.btnCheck>
                </L.InputContainer>

                <L.InputText>비밀번호</L.InputText>
                <L.InputLine
                    type="password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder="비밀번호 입력하세요"
                />

                <L.InputText>닉네임</L.InputText>
                <L.InputContainer>
                    <L.InputLine
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
            </S.RegisteContainer>
        </>
    );
}