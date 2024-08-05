import React, { useEffect } from "react";
import * as S from "../styles/page/Login.stlye";
import Intro from "../components/intro";
import LoginModule from "../components/loginModule";
import { useRecoilState } from "recoil";
import { isLoginSelector, tokenState } from "../Recoil/TokenAtom";
import { useNavigate,Navigate, useLocation } from "react-router-dom";
export default function LoginPage() {
    const navigate = useNavigate();
    // 로그인 여부 확인
    const savedToken = JSON.parse(sessionStorage.getItem('login'));
    useEffect(() => {
        // login 확인
        if (savedToken) {
            alert("이미 로그인 됨.");
            navigate('/main', { replace: true, state: { redirectedFrom: window.location.pathname } });
        }
    }, []);
    return (
        <S.LoginContainer>
            <Intro></Intro>
            <LoginModule></LoginModule>
        </S.LoginContainer>
    );
}