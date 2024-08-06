import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "../styles/page/Login.stlye";

import Intro from "../components/intro";
import Back from "../components/Back";

import { useRecoilState } from 'recoil';
import { isLoginSelector, tokenState } from "../Recoil/TokenAtom";
import axios from 'axios';

export default function LoginPageEmail() {
    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');
    const [token, setToken] = useRecoilState(tokenState);
    const isFormValid = userId !== '' && pwd !== '';
    const navigate = useNavigate();
    const location = useLocation();
    // 이전 페이지
    const from = location.state?.redirectedFrom || '/main';

    // login 요청
    const tryLogin = async () => {
        const requestBody = {
            email: userId,
            password: pwd
        };
        axios.post('https://sub.skuhackathon.shop/members/login', requestBody, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            }
        })
            .then(async response => {
                if (response.status == 200) {
                    const result = response.data.result;
                    const jwtToken = result.accessToken;
                    const userData = await axios.get('https://sub.skuhackathon.shop/members/', {
                        headers: {
                            'Accept': '*/*',
                            'Authorization': `Bearer ${jwtToken}`  // JWT 토큰 설정
                        }
                    });
                    const userResult = userData.data.result;
                    sessionStorage.setItem('token', jwtToken);
                    sessionStorage.setItem('login',true);
                    sessionStorage.setItem('user', JSON.stringify({
                        userId: result.memberId,
                        email: result.email,
                        ageGroup: userResult.ageGroup,
                        userName : userResult.userName,
                        profileImage : userResult.profileImage,
                        memberKeyword : userResult.memberKeyword
                    }));
                    navigate(from);
                }
            })
            .catch(error => {
                if(error.response.data.code == "auth4001")
                    setIsErr(true);
            });

    };


    // 오류 출력
    const [isErr, setIsErr] = useState(false);
    // 로그인 여부 확인
    const login = sessionStorage.getItem('login');
    useEffect(() => {
        // login 확인
        if (login) {
            navigate('/main', { replace: true, state: { redirectedFrom: window.location.pathname } });
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