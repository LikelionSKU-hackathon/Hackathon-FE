import React, { useEffect } from 'react';
import axios from 'axios';

export default function OAuthRedirectHandler(){
  useEffect(() => {
    const extractToken = () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');
      if (token) {
        localStorage.setItem('jwtToken', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // 원하는 페이지로 리디렉션
        window.location.href = '/dashboard'; // 예: 대시보드 페이지로 리디렉션
      } else {
        console.error('No token found in URL');
      }
    };

    extractToken();
  }, []);

  return <div>Loading...</div>;
};


