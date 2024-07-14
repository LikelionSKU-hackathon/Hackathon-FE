import React, { useEffect } from "react";
import { useState } from "react";
import { Link , useNavigate, useLocation} from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoginSelector, tokenState } from "../Recoil/TokenAtom";

export default function LoginPage() {
    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');
    const setAccessToken = useRecoilState(tokenState);
    const navigate = useNavigate();
    const location = useLocation();
    // 이전 페이지
    const from = location.state?.redirectedFrom || '/';

    // login 테스트
    const tryLogin = (e) => {
        e.preventDefault();
        console.log(`userId: ${userId}, pwd: ${pwd}`);
        setAccessToken('access -fake-token');
        navigate(from); // HomePage
    }

    return (
        <div>
            <h1>로그인 페이지</h1>
            <h3>ID</h3>
            <input
                type="text"
                value={userId}
                autoFocus
                placeholder="아이디(이메일)을 입력하세요"
                onChange={(e) => setUserId(e.target.value)}
            />
            <h3>Password</h3>
            <input
                type="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                placeholder="비밀번호 입력하세요"
            />
            <button onClick={tryLogin}>로그인</button>
        </div>
    );
}