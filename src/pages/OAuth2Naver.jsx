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
            const clientId = import.meta.env.VITE_NAVER_CLIENT_ID;
            const clientSecret = import.meta.env.VITE_NAVER_CLIENT_SECRET;
            const redirectUri = import.meta.env.VITE_NAVER_REDIRECT;
            console.log('clientId:', clientId);
            console.log('clientSecret:', clientSecret);
            console.log('redirectUri:', redirectUri);
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


