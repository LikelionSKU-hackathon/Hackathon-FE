import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
export default function OAuthPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { provider } = useParams();
    console.log('provider:', provider);
    useEffect(() => {
        const handleOAuth2Callback = async () => {
            const urlParams = new URLSearchParams(location.search);
            const code = urlParams.get('code');
            const state = urlParams.get('state');
            try {
                const response = await fetch(`http://localhost:8080/api/v1/auth/login/oauth2/success?provider=${provider}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        code,
                        state,
                    }),
                });

                if (!response.ok) {
                    throw new Error('OAuth2 로그인 요청 실패');
                }

                const data = await response.json();
                const { accessToken, authorization, username, redirectUrl } = data;

                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('authorization', authorization);
                localStorage.setItem('username', username);

                console.log('OAuth2 로그인 성공:', username);
                console.log('JWT 토큰:', accessToken);

                if (redirectUrl) {
                    window.location.href = redirectUrl;
                } else {
                    navigate('/');
                }
            } catch (error) {
                console.error('OAuth2 로그인 처리 중 오류 발생:', error);
            }
        };

        handleOAuth2Callback();
    }, [provider, location.search, navigate]);
    return (
        <div>
            <h1>OAuth2 Login Example</h1>
        </div>
    );
}