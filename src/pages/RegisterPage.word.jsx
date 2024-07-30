import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from "../styles/page/Register.stlye";
import * as L from "../styles/page/Login.stlye";
import Back from "../components/Back";
import WordLine from "../components/WordLine";
import { useRecoilState } from 'recoil';
import { ProfileState } from "../Recoil/TokenAtom";

export default function RegisterPageWord() {
    const [userId, setUserId] = useState("");
    const [pwd, setPwd] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [profileImage, setProfileImage] = useState();
    const [emojis, setEmoji] = useState(
        {
            "연애 및 대인관계": "❤️",
            "진로 및 취업": "🧩",
            "정신건강": "🧠",
            "생활문제": "🏡",
            "학업 및 자격증": "✏️",
        }
    );
    const fileInputRef = useRef(null);
    const isFormValid = userId !== '' && pwd !== '' && name !== '' && age !== "" && profileImage !== null;
    const navigate = useNavigate();
    // state 불러오기
    const location = useLocation();
    const message = location.state || {};

    const profile = useRecoilState(ProfileState);
    console.log(profile);
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
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleBoxClick = (id) => {
        console.log(`userId: ${userId}, pwd: ${pwd}, name: ${name}, age: ${age}`);
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
    const savedToken = sessionStorage.getItem('user');
    useEffect(() => {
        // login 확인
        console.log("user : " + savedToken);
        if (savedToken) {
            alert("이미 로그인 됨.");
            navigate('/', { replace: true, state: { redirectedFrom: window.location.pathname } });
        }
        else{
            if (message) {
                setUserId(message.userId);
                setPwd(message.pwd);
                setName(message.name);
                setAge(message.age);
                setProfileImage(message.profileImage);
                console.log("데이터 확인 in /word");
        }}
    }, []);

    // 다음 이동
    const handleSubmitClick = (e) => {
        console.log(selectedOptions);
        if (selectedOptions.length == 3) {
            navigate('/register/profile',
                {
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
                    {options.map((word, index) => (
                        <WordLine
                            id={index}
                            key={word}
                            emoji={word[0]}
                            tag={word[1]}
                            title={word[2]}
                            selected={selectedOptions.includes(index)}
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