import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';


export default function OAuth2Naver() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleOAuth2Callback = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            console.log('urlParams:', urlParams);
            const code = urlParams.get('code');
            console.log('Code:', code);
            const state = urlParams.get('state');
            console.log('state:', state);
            const clientId = "이거 비웠으니까 넣어줘야함";
            const clientSecret = "이거 비웠으니까 넣어줘야함";
            const redirectUri = "이거 비웠으니까 넣어줘야함";
            try{
            if (code) {
                const response = await fetch(`https://nid.naver.com/oauth2.0/token`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({
                        grant_type: 'authorization_code',
                        client_id: clientId,
                        client_secret: clientSecret,
                        code: code,
                        redirect_uri: redirectUri,
                    }),
                });
                console.log('response:', response);

            }}
            catch(e){
                console.error(e);
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


