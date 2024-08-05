import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function OAuthRedirectHandler() {
  const navigate = useNavigate();
  useEffect(() => {
    const extractToken = () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');
      if (token) {
        localStorage.setItem('jwtToken', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // 원하는 페이지로 리디렉션
        navigate('/register/email',
          {
            state: {
              social: {
                provider: 'social',
                token : token
              }
            }
          }
        );
      } else {
        console.error('No token found in URL');
      }
    };

    extractToken();
  }, []);

  return <div>Loading...</div>;
};

