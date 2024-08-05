import * as S from "../styles/page/Login.stlye";
import naver from "../assets/Login/logo_naver.png";
import kakao from "../assets/Login/logo_kakao.png";
import google from "../assets/Login/logo_google.png";
import { Link } from 'react-router-dom';
export default function LoginModule() {
    const handleNaverLogin = () => {
        window.location.href = 'https://sub.skuhackathon.shop/api/v1/oauth2/authorization/naver';
    };

    const handleKakaoLogin = () => {
        window.location.href = 'https://sub.skuhackathon.shop/api/v1/oauth2/authorization/kakao';
    };

    const handleGoogleLogin = () => {
        window.location.href = 'https://sub.skuhackathon.shop/api/v1/oauth2/authorization/google';
    };

    return (
        <S.ModuleContainer>
            <S.LoginLine className="naver" to="/main" onClick={handleNaverLogin}>
                <img src={naver} ></img>
                <p> 네이버 계정으로 로그인</p>
            </S.LoginLine>
            <S.LoginLine className="kakao" to="/main" onClick={handleKakaoLogin}>
                <img src={kakao} ></img>
                <p>카카오 계정으로 로그인</p>
            </S.LoginLine>
            <S.LoginLine className="google" to="/main" onClick={handleGoogleLogin}>
                <img src={google} ></img>
                <p>Google 계정으로 로그인</p>
            </S.LoginLine>
            <div>
                <S.LoginLegacy to="/register">회원가입</S.LoginLegacy>
                <S.LoginLegacy to="/login/email">이메일로 로그인</S.LoginLegacy>
            </div >
        </S.ModuleContainer >
    );
}