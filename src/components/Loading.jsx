import * as S from "../styles/components/Loading.js";
import React, { useEffect, useState } from 'react';
import BG_Night from "../assets/Loading/bg_night.svg";
import BG_Morning from "../assets/Loading/bg_morning.svg";
import Word_Night from "../assets/Loading/word_night.svg";
import Word_Morning from "../assets/Loading/word_morning.svg";
export default function Loading() {
    const [background, setBackground] = useState('');
    const [word, setWord] = useState('');

    useEffect(() => {
        const hours = new Date().getHours();
        if (hours >= 18 || hours < 6) {
            {
                setBackground(BG_Night);
                setWord(Word_Night);
            }
        } else {
            {
                setBackground(BG_Morning);
                setWord(Word_Morning);
            }
        }
    }, []);
    return (
        <S.LoadingContainer background={background}>
            <S.Word src={word}></S.Word>
        </S.LoadingContainer>
    );
}