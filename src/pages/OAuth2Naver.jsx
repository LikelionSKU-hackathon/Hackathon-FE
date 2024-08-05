import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';


export default function OAuth2Naver() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleOAuth2Callback = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            console.log('urlParams:', urlParams.toString());
            const code = urlParams.get('code');
            console.log('Code:', code);
            const state = urlParams.get('state');
            console.log('state:', state);
            const clientId = import.meta.env.VITE_NAVER_CLIENT_ID;
            const clientSecret = import.meta.env.VITE_NAVER_CLIENT_SECRET;
            const redirectUri = import.meta.env.VITE_NAVER_REDIRECT;
            console.log('clientId:', clientId);
            console.log('clientSecret:', clientSecret);
            console.log('redirectUri:', redirectUri);
            try {
                const response = await fetch('http://localhost:8080/api/v1/auth/login/oauth2/success', {
                    method: 'GET',
                    credentials: 'include'
                });
                console.log('response:', response);
                console.log('response:', Object.entries(response));
                if (!response.ok) {
                    throw new Error('OAuth2 로그인 요청 실패');
                }

                const data = await response.json();

                const accessToken = data.accessToken;
                const authorization = data.authorization;
                const username = data.username;
                const redirectUrl = data.redirectUrl;

                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('authorization', authorization);
                localStorage.setItem('username', username);

                console.log('OAuth2 로그인 성공:', username);
                console.log('JWT 토큰:', accessToken);

                if (redirectUrl) {
                    window.location.href = redirectUrl;
                }

            } catch (error) {
                console.error('OAuth2 로그인 처리 중 오류 발생:', error);
            }
        };

        // 콜백 URL에서 이 함수를 호출
        handleOAuth2Callback();
        handleOAuth2Callback();
    }, [navigate]);

    return (
        <Loading />
    );
};


