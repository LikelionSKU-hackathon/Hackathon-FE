import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoginSelector, tokenState } from "../Recoil/TokenAtom";
import * as S from "../styles/page/Login.stlye";

import Intro from "../components/intro";
import Back from "../components/Back";

export default function LoginPageEmail() {
    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');
    const isFormValid = userId !== '' && pwd !== '';
    const setAccessToken = useRecoilState(tokenState);
    const navigate = useNavigate();
    const location = useLocation();
    // 이전 페이지
    const from = location.state?.redirectedFrom || '/';

    // login 테스트
    const tryLogin = (e) => {
        e.preventDefault();
        console.log(`userId: ${userId}, pwd: ${pwd}`);
        if (login()) {

        }
        else {
            setIsErr(true);
        }
        //setAccessToken('access -fake-token');
        //navigate(from); // HomePage
    }
    // 더미
    const login = () => {
        return false;
    }
    // 오류 출력
    const [isErr, setIsErr] = useState(false);

    return (
        <>
            <Back to = "/login"></Back>
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
                    onChange={(e) => {setUserId(e.target.value); setIsErr(false);}}
                />
                <S.InputText>비밀번호</S.InputText>
                <S.InputLine
                    type="password"
                    value={pwd}
                    onChange={(e) => {setPwd(e.target.value); setIsErr(false);}}
                    placeholder="비밀번호 입력하세요"
                />
                <S.InputSubmit onClick={tryLogin} disabled={!isFormValid}>로그인</S.InputSubmit>
            </S.LoginContainer>
        </>
    );
}