import React, { useEffect, useState } from 'react';
import * as S from "../styles/components/Loading";
import BG_Night from "../assets/Loading/bg_night.svg";
import BG_Morning from "../assets/Loading/bg_morning.svg";
import Word_Night from "../assets/Loading/word_night.svg";
import Word_Morning from "../assets/Loading/word_morning.svg";

export default function Loading() {
    const [background, setBackground] = useState('');
    const [word, setWord] = useState('');
    const [isVisible, setIsVisible] = useState(true);
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    useEffect(() => {
        if (hasLoaded === 'true') {
            setIsVisible(false);
            return;
        }

        const hours = new Date().getHours();
        if (hours >= 18 || hours < 6) {
            setBackground(BG_Night);
            setWord(Word_Night);
        } else {
            setBackground(BG_Morning);
            setWord(Word_Morning);
        }

        // // 타이머를 사용하여 2초 후에 로딩 화면을 숨김
        // const timer = setTimeout(() => {
        //     setIsVisible(false);
        //     sessionStorage.setItem('hasLoaded', 'true');
        // }, 2000);

        // // 클린업 함수
        // return () => clearTimeout(timer);
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <S.LoadingContainer background={background}>
            <S.Word src={word} />
        </S.LoadingContainer>
    );
}
