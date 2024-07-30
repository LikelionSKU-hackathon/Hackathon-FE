import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as S from "../styles/page/Login.stlye";

import Intro from "../components/intro";
import Back from "../components/Back";

import { useRecoilState } from 'recoil';
import { isLoginSelector, tokenState } from "../Recoil/TokenAtom";
import preview from "../assets/Login/icon_Preview.svg";
import axios from 'axios';
export default function LoginPageEmail() {
    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');
    const [token, setToken] = useRecoilState(tokenState);
    const isFormValid = userId !== '' && pwd !== '';
    const navigate = useNavigate();
    const location = useLocation();
    // 이전 페이지
    const from = location.state?.redirectedFrom || '/';

    // login 요청
    const tryLogin = async () => {
        console.log(`userId: ${userId}, pwd: ${pwd}`);
        const url = 'https://sub.skuhackathon.shop/members/login';
        try {
            const response = await axios.post(url, {
                email: userId,
                password: pwd,
            }); `    `
            console.log("보냈어용");
            console.log(response.data);
            console.log(response.status);
            sessionStorage.setItem('user', JSON.stringify({
                userId: userId,
                pwd: pwd,
                name: "기묘둠",
                age: "20대",
                options: [1, 2, 3],
                profile: { preview }
            }));
            navigate(from);
        } catch (error) {
            console.log("에러에용");
            console.error('Error:', error);
            setIsErr(true);
        }
    }

    // 오류 출력
    const [isErr, setIsErr] = useState(false);
    const isLogin = useRecoilState(isLoginSelector);
    const currentLocation = useLocation();
    // 로그인 여부 확인
    const savedToken = sessionStorage.getItem('user');
    useEffect(() => {
        // login 확인
        if (savedToken) {
            alert("이미 로그인 됨.");
            navigate('/', { replace: true, state: { redirectedFrom: window.location.pathname } });
        }
    }, []);
    return (
        <>
            <Back to="/login"></Back>
            <S.LoginContainer>
                <Intro></Intro>
                <S.ErrText
                    disabled={!isErr}
                >
                    입력한 정보가 문제가 있습니다. 다시 한 번 확인해주시길 바랍니다</S.ErrText>
                <S.InputText>이메일</S.InputText>
                <S.InputLine
                    type="text"
                    value={userId}
                    autoFocus
                    placeholder="이메일을 입력하세요"
                    onChange={(e) => { setUserId(e.target.value); setIsErr(false); }}
                />
                <S.InputText>비밀번호</S.InputText>
                <S.InputLine
                    type="password"
                    value={pwd}
                    onChange={(e) => { setPwd(e.target.value); setIsErr(false); }}
                    placeholder="비밀번호 입력하세요"
                />
                <S.InputSubmit onClick={tryLogin} disabled={!isFormValid}>로그인</S.InputSubmit>
            </S.LoginContainer>
        </>
    );
}