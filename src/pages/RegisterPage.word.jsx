import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from "../styles/page/Register.stlye";
import * as L from "../styles/page/Login.stlye";
import Back from "../components/Back";
import WordLine from "../components/WordLine";
import icon from "../assets/Login/icon_edit.png";
export default function RegisterPageWord() {
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
    var cnt = 0;
    const [selectedOptions, setSelectedOptions] = useState([]);
    const handleBoxClick = (value) => {
        console.log(value);
        if (selectedOptions.includes(value)) {
            setSelectedOptions(selectedOptions.filter((word) => word !== value));
        } else {
            if (selectedOptions.length < 3) {
                setSelectedOptions([...selectedOptions, value]);
            } else {
                alert('You can only select up to 3 options.');
            }
        }
    };
    return (
        <S.WordListContainer>
            <Back to = "/register/email"></Back>
            <L.Intro>
                <h6>님을 위한
                    <br />고민 키워드를 제시해 드릴께요</h6>
                <p>RWD기반 연령별 최빈도 및 공통 상담주제와<br />
                    초간단 검진결과를 반영한 추천 솔류션입니다.</p>
            </L.Intro>
            <p>"요즘내 고민과 유사한 3가지 고민을 골라주세요"</p>
            <S.ListContainer>
                <WordLine
                    emoji={emoji[0]}
                    tag={tag[0]}
                    title="연애 중인데 자주 다퉈요"
                    selected={true}
                    onClick={() => handleBoxClick(option)}
                />
                <WordLine
                    emoji={emoji[0]}
                    tag={tag[0]}
                    title="연애 중인데 자주 다퉈요"
                    selected={false}
                    onClick={() => handleBoxClick(option)}
                />
                {options.map((word) => (
                    <WordLine
                        key={word}
                        emoji={emoji[0]}
                        tag={tag[0]}
                        title="연애 중인데 자주 다퉈요"
                        selected={selectedOptions.includes(word)}
                        onClick={() => handleBoxClick(word)}
                    />
                ))}
                <L.InputSubmit onClick={() => handleBoxClick(word)}>입력완료({cnt}/3)</L.InputSubmit>
            </S.ListContainer>
        </S.WordListContainer>
    );
}