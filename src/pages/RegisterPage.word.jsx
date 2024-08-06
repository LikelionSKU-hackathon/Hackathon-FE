import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from "../styles/page/Register.stlye";
import * as L from "../styles/page/Login.stlye";
import Back from "../components/Back";
import WordLine from "../components/WordLine";
import axios from 'axios';
export default function RegisterPageWord() {
    const [userId, setUserId] = useState("");
    const [pwd, setPwd] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [profileImage, setProfileImage] = useState();
    const [option, setOption] = useState();
    const fileInputRef = useRef(null);
    const isFormValid = userId !== '' && pwd !== '' && name !== '' && age !== "" && profileImage !== null;
    const navigate = useNavigate();
    const location = useLocation();
    const message = location.state || {};
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleBoxClick = (id) => {
        setSelectedOptions((prevSelectedOptions) => {
            if (prevSelectedOptions.includes(id)) {
                return prevSelectedOptions.filter((optionId) => optionId !== id);
            } else {
                if (prevSelectedOptions.length < 3) {
                    return [...prevSelectedOptions, id];
                } else {
                    alert('You can only select up to 3 options.');
                    return prevSelectedOptions;
                }
            }
        });
    };
    // test
    // 로그인 여부 확인
    const login = sessionStorage.getItem('login');
    const userData = JSON.parse(sessionStorage.getItem('user'));
    console.log("data 0: " + message.profileImage);
    console.log("data 1: " + Object.entries(message));
    useEffect(() => {
        // login 확인
        //console.log("user : " + savedToken);
        if (login) {
            alert("이미 설정 됨.");
            navigate('/main', { replace: true, state: { redirectedFrom: window.location.pathname } });
        }
        else {
            const token = sessionStorage.getItem('token')
            console.log("data 1: " + token);
            setUserId(userData.userId);
            console.log("userId : " + userData.userId);
            setName(userData.userName);
            setAge(userData.age);
            console.log("profileImage: " + sessionStorage.getItem('profileImage'));
            setProfileImage(sessionStorage.getItem('profileImage'));
            // 선택지 불러오기
            axios.get(`https://sub.skuhackathon.shop/keyword/${userData.userId}`)
                .then(response => {
                    if (response.data.code == "COMMON200") {
                        if (!response.result) {
                            console.log("option: " + response.data.result.keywordList[0].id);
                            setOption(response.data.result.keywordList);
                        }
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, []);

    // 다음 이동
    const handleSubmitClick = (e) => {
        console.log("options : " + selectedOptions);
        if (selectedOptions.length == 3) {
            console.log("전송시작");
            // 키워드 전송
            sessionStorage.setItem('profileImage',profileImage);
            navigate('/register/profile',
                {
                    state:
                    {
                        userId,
                        pwd,
                        name,
                        age,
                        profileImage : profileImage,
                        selectedOptions,
                        option
                    }
                });

        }
    };
    return (
        <>
            <Back to="/register/email"></Back>
            <S.WordListContainer>
                <S.Intro>
                    <h6>'<span>{name}' </span>님을 위한
                        <br />고민 키워드를 제시해 드릴께요</h6>
                    <p>RWD기반 연령별 최빈도 및 공통 상담주제와<br />
                        초간단 검진결과를 반영한 추천 솔류션입니다.</p>
                </S.Intro>
                <p>"요즘내 고민과 유사한 3가지 고민을 골라주세요"</p>

                <S.ListContainer>
                    {option && option.map((word, index) => (
                        <WordLine
                            id={word.id}
                            key={word.id}
                            emoji={word.emoji}
                            tag={word.category}
                            title={word.name}
                            selected={selectedOptions.includes(word.id)}
                            onClick={handleBoxClick}
                        />
                    ))}
                </S.ListContainer>
                <L.InputSubmit
                    onClick={handleSubmitClick}
                    disabled={selectedOptions.length !== 3}
                >입력완료({selectedOptions.length}/3)
                </L.InputSubmit>
            </S.WordListContainer>
        </>
    );
}