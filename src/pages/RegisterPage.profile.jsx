import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from "../styles/page/Register.stlye";
import * as L from "../styles/page/Login.stlye";
import Back from "../components/Back";
import WordLine from "../components/WordLine";
import icon from "../assets/Login/icon_edit.png";
export default function RegisterPageProfile() {
    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const fileInputRef = useRef(null);
    const isFormValid = userId !== '' && pwd !== '' && name !== '' && age !== 0;
    const location = useLocation();
    const navigate = useNavigate();
    const { message } = location.state || "1";
    //console.log({message});

    var emoji = ["❤️", "🧩", "🧠", "🏡", "✏️"];
    var tag = ["연애 및 대인관계", "진로 및 취업", "정신건강", "생활문제", "학업 및 자격증"];
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

    const tryRegister = (e) => {
        console.log('button clicked');
        e.preventDefault();
        console.log(`userId: ${userId}, pwd: ${pwd}, name: ${name}, age: ${age}`);
        navigate('/register/final');
    }
    // test
    const handleBoxClick = useEffect(() => {
        setName('김민서');
    }, []);

    return (
        <S.ProflePageContainer>
            <Back to="/register/word"></Back>
            <L.Intro>
                <h6>쓰담쓰담에서
                    <br />사용할 나의 프로필</h6>
            </L.Intro>
            <S.ProfileBox>
                <S.Profile2
                    id="fileView"
                    alt="Profile" />
                <p><span className="name">{name}</span>님의
                    <br />이야기가 기록 될 프로필 입니다 :)</p>
                <hr></hr>
                <h1>20대 나의 주요고민</h1>
                <WordLine
                    emoji={emoji[0]}
                    tag={tag[0]}
                    title="연애 중인데 자주 다퉈요"
                    selected={true}
                    onClick={() => handleBoxClick(option)}
                    onProfile = {true}
                />
                <WordLine
                    emoji={emoji[0]}
                    tag={tag[0]}
                    title="연애 중인데 자주 다퉈요"
                    selected={true}
                    onClick={() => handleBoxClick(option)}
                    onProfile = {true}
                />
                <WordLine
                    emoji={emoji[0]}
                    tag={tag[0]}
                    title="연애 중인데 자주 다퉈요"
                    selected={true}
                    onClick={() => handleBoxClick(option)}
                    onProfile = {true}
                />
            </S.ProfileBox>
            <L.InputSubmit><p>확인완료</p></L.InputSubmit>
        </S.ProflePageContainer>
    );
}