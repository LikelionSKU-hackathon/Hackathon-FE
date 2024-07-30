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
    const [profileImage, setProfileImage] = useState();
    const [selectedOptions, setSelectedOptions] = useState([]);
    const fileInputRef = useRef(null);
    const isFormValid = userId !== '' && pwd !== '' && name !== '' && age !== 0;
    const location = useLocation();
    const navigate = useNavigate();
    const message = location.state || {};
    console.log({ message });
    const [emojis, setEmoji] = useState(
        {
            "연애 및 대인관계": "❤️",
            "진로 및 취업": "🧩",
            "정신건강": "🧠",
            "생활문제": "🏡",
            "학업 및 자격증": "✏️",
        }
    );
    var emoji = ["❤️", "🧩", "🧠", "🏡", "✏️"];
    var tag = ["연애 및 대인관계", "진로 및 취업", "정신건강", "생활문제", "학업 및 자격증"];
    const options = [
        [
            emojis["연애 및 대인관계"],
            tag[0],
            "1111"
        ],
        [
            emojis["정신건강"],
            tag[1],
            "연2222"
        ],
        [
            emojis["학업 및 자격증"],
            tag[3],
            "연애 3333"
        ],
        [
            emojis["생활문제"],
            tag[4],
            "연애 444"
        ],
        [
            emojis["진로 및 취업"],
            tag[2],
            "연애 55"
        ],
    ];
    // 이미지 설정
    const setImage = (event) => {
        const fileView = document.getElementById('fileView');
        if (profileImage)
            fileView.style.backgroundImage = `url(${profileImage})`;
    };
    // 가입 테스트
    const tryRegister = async () => {
        console.log(`userId: ${userId}, pwd: ${pwd}, name: ${name}, age: ${age}`);
        // 가입 요청
        const url = 'https://sub.skuhackathon.shop/members/signup';
        try {
            const response = await axios.post(url, {
                username: name,
                email: userId,
                password: pwd,
                age_group: age,
                role: selectedOptions,
                profileImage: profileImage,
            });`    `
            console.log("보냈어용");
            console.log(response.data);
            console.log(response.status);
        } catch (error) {
            console.log("에러에용");
            console.error('Error:', error);
        }
    }
    // test
    // 로그인 여부 확인
    const savedToken = sessionStorage.getItem('user');
    useEffect(() => {
        // login 확인
        if (savedToken) {
            alert("이미 로그인 됨.");
            navigate('/', { replace: true, state: { redirectedFrom: window.location.pathname } });
        }
        else {
            if (message) {
                setUserId(message.userId);
                setPwd(message.pwd);
                setName(message.name);
                setAge(message.age);
                setProfileImage(message.profileImage);
                setSelectedOptions(message.selectedOptions);
                setImage();
                console.log("데이터 확인 in /profile");
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
                    {message != null && selectedOptions[0] != null&& (
                        <>
                            <FixLine
                                emoji={options[selectedOptions[0]][0]}
                                tag={options[selectedOptions[0]][1]}
                                title={options[selectedOptions[0]][2]}
                                selected={false}
                                onClick={() => handleBoxClick(selectedOptions[0])}
                            />
                            <FixLine
                                emoji={options[selectedOptions[1]][0]}
                                tag={options[selectedOptions[1]][1]}
                                title={options[selectedOptions[1]][2]}
                                selected={false}
                                onClick={() => handleBoxClick(selectedOptions[1])}
                            />
                            <FixLine
                                emoji={options[selectedOptions[2]][0]}
                                tag={options[selectedOptions[2]][1]}
                                title={options[selectedOptions[2]][2]}
                                selected={true}
                                onClick={() => handleBoxClick(selectedOptions[2])}
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