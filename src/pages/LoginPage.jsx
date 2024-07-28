import React, { useEffect } from "react";
import * as S from "../styles/page/Login.stlye";
import Intro from "../components/intro";
import LoginModule from "../components/loginModule";
import { useRecoilState } from "recoil";
import { isLoginSelector, tokenState } from "../Recoil/TokenAtom";
import { useNavigate,Navigate, useLocation } from "react-router-dom";
export default function LoginPage() {
    const isLogin = useRecoilState(isLoginSelector);
    const currentLocation = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        console.log(isLogin);
        // login 확인
        if (isLogin[0]) {
            alert("로그인 되어있음");
            navigate('/', { replace: true, state: { redirectedFrom: window.location.pathname } });
        }
        else{
            console.log("로그인 안됨");
        }
    }, []);
    return (
        <S.LoginContainer>
            <Intro></Intro>
            <LoginModule></LoginModule>
        </S.LoginContainer>
    );
}