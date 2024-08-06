import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from "../styles/page/Register.stlye";
import * as L from "../styles/page/Login.stlye";
import Back from "../components/Back";
import FixLine from "../components/FixLine";
import axios from 'axios';
export default function RegisterPageProfile() {
    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [profileImage, setProfileImage] = useState(undefined);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const fileInputRef = useRef(null);
    const isFormValid = userId !== '' && pwd !== '' && name !== '' && age !== 0;
    const location = useLocation();
    const navigate = useNavigate();
    const message = location.state || {};
    const [options, setoptions] = useState();

    // 이미지 설정
    const setImage = (event) => {
        const fileView = document.getElementById('fileView');
        if (profileImage) {
            fileView.style.backgroundImage = `url(${profileImage})`;
        }
    };
    // 가입
    const tryRegister = async () => {
        const userData = JSON.parse(sessionStorage.getItem('user'));
        // 키워드 전송
        axios.post(`https://sub.skuhackathon.shop/keyword/${userData.userId}`,
            {
                keywordIdList: message.selectedOptions
            },
            {
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                navigate('/register/final',
                    {
                        replace: true,
                        state:
                        {
                            userId,
                            pwd,
                            name,
                            age,
                            profileImage,
                            selectedOptions
                        }
                    });
            })
            .catch(error => {
                alert("오류 발생. 다시 시도해주세요.");
            });
    }
    // test
    useEffect(() => {
        setImage();
    }, [profileImage]);
    // 로그인 여부 확인
    useEffect(() => {
        // login 확인
        const login = sessionStorage.getItem('login');
        if (login) {
            alert("이미 로그인 됨.");
            navigate('/main', { replace: true, state: { redirectedFrom: window.location.pathname } });
        }
        else {
            if (message) {
                const option = message.option;
                const selected = message.selectedOptions;
                const op = []
                op.push(option.find(item => item.id === selected[0]));
                op.push(option.find(item => item.id === selected[1]));
                op.push(option.find(item => item.id === selected[2]));
                setoptions(op);
                setName(message.name);
                
                const userData = JSON.parse(sessionStorage.getItem('user'));

                // 로그인
                const jwtToken = localStorage.getItem('jwtToken');
                const info = axios.get('https://sub.skuhackathon.shop/members/', {
                    headers: {
                        'Accept': '*/*',
                        'Authorization': `Bearer ${jwtToken}`
                    }
                });
                //console.log("data 2: " + Object.entries(userData));
                setUserId(userData.userId);
                setPwd(userData.pwd);
                setName(userData.userName);
                setAge(userData.ageGroup);
                setProfileImage(sessionStorage.getItem('profileImage'));
                setoptions(op);

            }
        }
    }, []);
    setImage();
    return (
        <>
            <Back to="/register/word"></Back>
            <S.ProflePageContainer>
                <S.Intro>
                    <h6>쓰담쓰담에서
                        <br />사용할 나의 프로필</h6>
                </S.Intro>
                <S.ProfileBox>
                    <S.Profile2
                        id="fileView"
                        alt="Profile" />
                    <p><span className="name">{name}</span>님의
                        <br />이야기가 기록 될 프로필 입니다 :)</p>
                    <hr></hr>
                    <h1>{age} 나의 주요고민</h1>
                    {options != null && options[0] != null && (
                        <>
                            <FixLine
                                emoji={options[0].emoji}
                                tag={options[0].category}
                                title={options[0].name}
                                selected={false}
                            />
                            <FixLine
                                emoji={options[1].emoji}
                                tag={options[1].category}
                                title={options[1].name}
                                selected={false}
                            />
                            <FixLine
                                emoji={options[2].emoji}
                                tag={options[2].category}
                                title={options[2].name}
                                selected={true}
                            />
                        </>
                    )}
                </S.ProfileBox>
                <L.InputSubmit
                    onClick={tryRegister}>
                    <p>확인완료</p>
                </L.InputSubmit>
            </S.ProflePageContainer>
        </>
    );
}