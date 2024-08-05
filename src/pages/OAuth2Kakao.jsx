import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';

export default function OAuth2Kakao() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleOAuth2Callback = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');
            console.log('code :', code);
            const state = urlParams.get('state');
            console.log('state :', state);

            const clientId = "이거 비웠으니까 넣어줘야함";
            const clientSecret = "이거 비웠으니까 넣어줘야함";
            const redirectUri = "이거 비웠으니까 넣어줘야함";
            if (code) {
                try {
                    // 인증 코드 처리 및 토큰 요청 로직
                    const response = await fetch(`https://kauth.kakao.com/oauth/token`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        body: `grant_type=authorization_code&client_id=${clientId}&redirect_uri=${redirectUri}&code=${code}&client_secret=${clientSecret}`,
                    });
                    console.log('response:', response);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    const access_token = data.access_token;
                    localStorage.setItem('social-token', access_token);
                    // console.log('tokenResponse:', tokenResponse);
                    // const token = tokenResponse.data;
                    // console.log('token:', token);
                    // localStorage.setItem('social-token', token);

                    // // 카카오 사용자 정보 요청
                    // const userInfoResponse = await axios.get('https://kapi.kakao.com/v2/user/me', {
                    //     headers: {
                    //         Authorization: `Bearer ${token}`,
                    //     },
                    // });
                    // console.log('userInfoResponse:', userInfoResponse);
                    // const { email, profile_image } = userInfoResponse.data.kakao_account;
                    // console.log('email:', email);
                    // console.log('profile_image:', profile_image);

                    // // 이메일과 프로필 사진 저장 및 후속 처리
                    // localStorage.setItem('user-email', email);
                    // localStorage.setItem('user-profile-image', profile_image);

                    // 특정 페이지로 리디렉션
                    //navigate('/register/email', { state: { social: "kakao" } });
                } catch (error) {
                    console.error('토큰 요청 중 오류 발생:', error);
                    alert('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
                    //navigate('/main'});
                }
            }
        };
        handleOAuth2Callback();
    }, []);


    return (
        <Loading></Loading>
    );
};


