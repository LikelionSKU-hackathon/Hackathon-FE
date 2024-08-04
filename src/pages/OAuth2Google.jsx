import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

export default function OAuth2Google() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleOAuth2Callback = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');
            console.log('Authorization Code:', code);
            const clientId = "이거 비웠으니까 넣어줘야함";
            const clientSecret = "이거 비웠으니까 넣어줘야함";
            const redirectUri = "이거 비웠으니까 넣어줘야함";
            if (code) {
                //액세스 토큰 요청
                const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: new URLSearchParams({
                        code: code,
                        client_id: clientId,
                        client_secret: clientSecret,
                        redirect_uri: redirectUri,
                        grant_type: 'authorization_code',
                    })
                });
                console.log('tokenResponse:', tokenResponse);
                const tokenData = await tokenResponse.json();
                console.log('tokenData:', tokenData);
                const accessToken = tokenData.access_token;
                console.log('accessToken:', accessToken);
                //사용자 정보 요청
                const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                console.log('userInfoResponse:', userInfoResponse);
                const userInfo = await userInfoResponse.json();
                console.log('userInfo:', userInfo);
                const email = userInfo.email;
                console.log('email:', email);
                const profilePicture = userInfo.picture;
                console.log('profilePicture:', profilePicture);

                console.log('Email:', email);
                console.log('Profile Picture:', profilePicture);

                // 저장후 이동
                if (email && profilePicture) {
                    localStorage.setItem('social-token', tokenData.token);
                    navigate('/register/email',
                        {
                            state: {
                                social: {
                                    provider: 'google',
                                    email,
                                    profilePicture
                                }
                            }
                        }
                    );
                }
            } else {
                console.error('Authorization code not found');
            }
        };

        // 콜백 URL에서 이 함수를 호출
        handleOAuth2Callback();

        handleOAuth2Callback();
    }, [navigate]);

    return (
        <Loading/>
    );
};
