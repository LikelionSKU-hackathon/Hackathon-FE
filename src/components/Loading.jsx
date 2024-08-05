import React, { useEffect, useState } from 'react';
import * as S from '../styles/components/Loading'; // Styled-components 파일 경로
import BG_Night from '../assets/Loading/bg_night.svg';
import BG_Morning from '../assets/Loading/bg_morning.svg';
import Word_Night from '../assets/Loading/word_night.svg';
import Word_Morning from '../assets/Loading/word_morning.svg';
import { useNavigate } from 'react-router-dom';

export default function Loading() {
    const [background, setBackground] = useState('');
    const [show, setShow] = useState(true);
    const [word, setWord] = useState('');
    const navigate = useNavigate(); // useNavigate 훅 사용

    useEffect(() => {
        const hours = new Date().getHours();
        if (hours >= 18 || hours < 6) {
            setBackground(BG_Night);
            setWord(Word_Night);
        } else {
            setBackground(BG_Morning);
            setWord(Word_Morning);
        }

        const timer = setTimeout(() => {
            setShow(false);
            //navigate('/main'); // 페이지 이동
        }, 2000); // 2초 후에 이동

        return () => clearTimeout(timer); // Cleanup function
    }, [navigate]);

    return (
        <S.LoadingContainer background={background} show = {show}>
            <S.Word src={word} />
        </S.LoadingContainer>
    );
}
