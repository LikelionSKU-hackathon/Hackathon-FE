import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function OAuthRedirectHandler() {
  const navigate = useNavigate();
  const tryLogin = async (jwtToken) => {
    try {
      const userData = await axios.get('https://sub.skuhackathon.shop/members/', {
        headers: {
          'Accept': '*/*',
          'Authorization': `Bearer ${jwtToken}`  // JWT 토큰 설정
        }
      });
      //console.log(userData.data.result);
      const userResult = userData.data.result;
      sessionStorage.setItem('token', jwtToken);
      sessionStorage.setItem('login', true);
      sessionStorage.setItem('user', JSON.stringify({
        userId: userResult.memberId,
        email: userResult.email,
        ageGroup: userResult.ageGroup,
        userName: userResult.userName,
        profileImage: userResult.profileImage,
        memberKeyword: userResult.memberKeyword
      }));
      sessionStorage.setItem('login', true);
      navigate('/');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    const extractToken = () => {
      const params = new URLSearchParams(window.location.search);
      const pathname = window.location.pathname;
      const isRedirect = pathname.startsWith('/oauth2/redirect');
      const isSuccess = pathname.startsWith('/oauth2/success');
      console.log('isRedirect : ', isRedirect);
      console.log('isSuccess : ', isSuccess);
      const token = params.get('token');
      if (token) {
        localStorage.setItem('jwtToken', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // 원하는 페이지로 리디렉션
        if (isRedirect) {
          navigate('/register/email',
            {
              state: {
                social: {
                  provider: 'social',
                  token: token
                }
              }
            }
          );
        } else if (isSuccess) {
          try {
            tryLogin(token);
          }
          catch {
            alert("오류 발생, 다시 시도해주세요.");
          }
        }
        else {
          alert("잘못된 접근입니다.")
          navigate('/');
        }
      } else {
        console.error('No token found in URL');
      }
    };

    extractToken();
  }, []);

  return <div>Loading...</div>;
};

