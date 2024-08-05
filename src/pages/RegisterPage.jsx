import React, { useEffect } from "react";
import * as S from "../styles/page/Login.stlye";
import naver from "../assets/Login/logo_naver.png";
import kakao from "../assets/Login/logo_kakao.png";
import google from "../assets/Login/logo_google.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function RegisterPage() {
    const navigate = useNavigate();
    let address = "";
    const handleClick = async (addr) => {
        try {
            address = addr;
            let response = null;
            if (addr == "naver") {
                const url = 'https://sub.skuhackathon.shop/api/v1/oauth2/authorization/naver';
                window.location.href = url;
            }
            else if (addr == "kakao") {
                const url = 'https://sub.skuhackathon.shop/api/v1/oauth2/authorization/kakao';
                window.location.href = url;
            }
            else if (addr == "google") {
                const url = 'https://sub.skuhackathon.shop/api/v1/oauth2/authorization/google';
                window.location.href = url;
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    // 로그인 여부 확인
    const login = sessionStorage.getItem('login');
    useEffect(() => {
        // login 확인
        if (login) {
            alert("이미 로그인 됨.");
            navigate('/main', { replace: true, state: { redirectedFrom: window.location.pathname } });
        }
    }, []);
    return (
        <S.LoginContainer>
            <S.Intro>
                <h6>간단하고 편한</h6>
                <h6>소셜가입은</h6>
                <h6>어떠세요?</h6>
                <p>오로지 나만을 위한 일기를 써보세요</p>
            </S.Intro>
            <S.ModuleContainer>
                <S.LoginLine className="naver" onClick={() => handleClick('naver')} >
                    <img src={naver} alt="icon_naver" ></img>
                    <p> 네이버 계정으로 회원가입</p>
                </S.LoginLine>
                <S.LoginLine className="kakao" onClick={() => handleClick('kakao')} >
                    <img src={kakao} alt="icon_kakao"></img>
                    <p>카카오 계정으로 회원가입</p>
                </S.LoginLine>
                <S.LoginLine className="google" onClick={() => handleClick('google')} >
                    <img src={google} alt="icon_google"></img>
                    <p>Google 계정으로 회원가입</p>
                </S.LoginLine>
                <div>
                    <S.LoginLegacy to="/register/email">이메일로 회원가입</S.LoginLegacy>
                </div >
            </S.ModuleContainer >
        </S.LoginContainer>
    );
}