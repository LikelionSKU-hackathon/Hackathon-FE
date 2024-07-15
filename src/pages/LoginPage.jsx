import React, { useEffect } from "react";
import * as S from "../styles/page/Login.stlye";
import Intro from "../components/intro";
import LoginModule from "../components/loginModule";

export default function LoginPage() {
    return (
        <S.LoginContainer>
            <Intro></Intro>
            <LoginModule></LoginModule>
        </S.LoginContainer>
    );
}