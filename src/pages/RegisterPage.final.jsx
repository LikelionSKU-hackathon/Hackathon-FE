import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from "../styles/page/Register.stlye";
import * as L from "../styles/page/Login.stlye";
import party from "../assets/Login/icon_Party.svg";
import preview from "../assets/Login/icon_Preview.svg";
import Back from "../components/Back";
export default function RegisterPageFinal() {
    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState("");
    const [profileImage, setProfileImage] = useState();
    const fileInputRef = useRef(null);
    const isFormValid = userId !== '' && pwd !== '' && name !== '' && age !== 0;
    const location = useLocation();
    const navigate = useNavigate();
    const message = location.state || {};
    document.body.style.overflow = 'hidden';
    const tryRegister = (e) => {
        e.preventDefault();
        navigate('/login/email'
            , { replace: true, }
        );
    }
    // 로그인 여부 확인
    const savedToken = JSON.parse(sessionStorage.getItem('login'));
    useEffect(() => {
        // login 확인
        if (savedToken) {
            navigate('/', { replace: true, state: { redirectedFrom: window.location.pathname } });
        }
        else {
            setUserId(message.userId);
            setPwd(message.pwd);
            setName(message.name);
            setAge(message.age);
            setProfileImage(message.profileImage);
            // 소셜 상태면 그대로 로그인 취급
            if (localStorage.getItem('jwtToken')) {
                sessionStorage.setItem('login', true);
            }
        }
    }, []);
    return (
        <>
            <Back></Back>
            <S.FinalPageContainer>
                <img src={party} className="party"></img>
                <h1>{name}님<br />반갑습니다!</h1>
                <p>쓰담쓰담 일기를 통해<br />내 마음를 어루만져봐요</p>
                <S.PreviewContainer>
                    <S.Preview src={preview}></S.Preview>
                </S.PreviewContainer>
                <S.FixSubmit onClick={tryRegister}>{sessionStorage.getItem('login') ? '바로 시작하기' : '로그인 하러 가기'}</S.FixSubmit>
            </S.FinalPageContainer>
        </>
    );
}