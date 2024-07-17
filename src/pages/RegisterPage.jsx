import React, { useEffect } from "react";
import * as S from "../styles/page/Login.stlye";
import naver from "../assets/Login/logo_naver.png";
import kakao from "../assets/Login/logo_kakao.png";
import google from "../assets/Login/logo_google.png";
import { Link } from 'react-router-dom';

export default function RegisterPage() {
    return (
        <S.LoginContainer>
            <S.Intro>
                <h6>간단하고 편한</h6>
                <h6>소셜가입은</h6>
                <h6>어떠세요?</h6>
                <p>오로지 나만을 위한 일기를 써보세요</p>
            </S.Intro>
            <S.ModuleContainer>
                <S.LoginLine className="naver" to={{
                    pathname: '/register/email',
                    state: { message: 'naver' }
                }}>
                    <img src={naver} ></img>
                    <p> 네이버 계정으로 회원가입</p>
                </S.LoginLine>
                <S.LoginLine className="kakao" to={{
                    pathname: '/register/email',
                    state: { message: 'kakao' }
                }}>
                    <img src={kakao} ></img>
                    <p>카카오 계정으로 회원가입</p>
                </S.LoginLine>
                <S.LoginLine className="google" to={{
                    pathname: '/register/email',
                    state: { message: 'google' }
                }}>
                    <img src={google} ></img>
                    <p>Google 계정으로 회원가입</p>
                </S.LoginLine>
                <div>
                    <S.LoginLegacy to="/register/email">이메일로 회원가입</S.LoginLegacy>
                </div >
            </S.ModuleContainer >
        </S.LoginContainer>
    );
}