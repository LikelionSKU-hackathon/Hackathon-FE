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


            const clientId = import.meta.env.VITE_KAKAO_CLIENT_ID;
            const clientSecret = import.meta.env.VITE_KAKAO_CLIENT_SECRET;
            const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT;
            if (code) {
                try {
                    // 인증 코드 처리 및 토큰 요청 로직
                    const bodyData = {
                        grant_type: "authorization_code",
                        client_id: clientId,
                        client_secret: clientSecret,
                        redirect_uri: redirectUri,
                        code: code
                    }
                    const queryStringBody = Object.keys(bodyData)
                        .map(k => encodeURIComponent(k) + "=" + encodeURI(bodyData[k]))
                        .join("&");
                    console.log('queryStringBody:', queryStringBody);
                    try {
                        const response = await fetch("https://kauth.kakao.com/oauth/token", {
                            method: "POST",
                            headers: {
                                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                            },
                            body: queryStringBody
                        })
                            .then(res => res.json())
                            .then((data) => {
                                console.log(data)
                            })
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }

                        const data = await response.json();
                        console.log(data)

                    } catch (error) {
                        console.error('Error fetching access token:', error.message);
                        throw error; // 에러를 호출자에게 전달
                    }
                    // console.log('response:', response);
                    // const accessToken = response.data.access_token;
                    // console.log('accessToken:', accessToken);
                    // if (!response.ok) {
                    //     throw new Error(`HTTP error! status: ${response.status}`);
                    // }
                    //const data = await response.json();
                    //console.log('data:', data);
                    //const access_token = data.access_token;
                    //localStorage.setItem('social-token', access_token);
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
                    //navigate('/'});
                }
            }
        };
        handleOAuth2Callback();
    }, []);


    return (
        <Loading></Loading>
    );
};


