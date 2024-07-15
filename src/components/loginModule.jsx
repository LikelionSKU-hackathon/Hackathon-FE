import * as S from "../styles/components/longinModule";
import naver from "../assets/Login/logo_naver.png";
import kakao from "../assets/Login/logo_kakao.png";
import google from "../assets/Login/logo_google.png";
import { Link } from 'react-router-dom';
export default function LoginModule() {
    return (
        <S.LoginContainer>
            <S.LoginLine className="naver">
                <img src={naver} ></img>
                <p> 네이버 계정으로 로그인</p>
            </S.LoginLine>
            <S.LoginLine className="kakao">
                <img src={kakao} ></img>
                <p>카카오 계정으로 로그인</p>
            </S.LoginLine>
            <S.LoginLine className="google">
                <img src={google} ></img>
                <p>Google 계정으로 회원가입</p>
            </S.LoginLine>
            <div>
                <S.LoginLegacy>회원가입</S.LoginLegacy>
            <S.LoginLegacy>이메일로 로그인</S.LoginLegacy>
            </div >
        </S.LoginContainer >
    );
}