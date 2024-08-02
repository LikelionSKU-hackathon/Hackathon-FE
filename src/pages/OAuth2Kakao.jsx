import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function OAuth2Kakao() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleOAuth2Callback = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');
            console.log('code :', code);
            const state = urlParams.get('state');
            console.log('state :', state);

            if (code) {
                try {
                    // 인증 코드 처리 및 토큰 요청 로직
                    const response = await axios.post('https://sub.skuhackathon.shop/api/v1/oauth2/callback/naver', { code, state });
                    // 토큰 저장 및 후속 처리
                    localStorage.setItem('social-token', response.data.token);
                    // 특정 페이지로 리디렉션
                    navigate('/register/email', { state: { social: "naver" } });
                } catch (error) {
                    console.error('토큰 요청 중 오류 발생:', error);
                }
            }
        };

        handleOAuth2Callback();
    }, [navigate]);

    return (
        <div>
            <h1>로그인 중...</h1>
        </div>
    );
};


