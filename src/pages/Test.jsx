import React, { useEffect } from 'react';

function Test() {
  useEffect(() => {
    handleOAuth2Success();
  }, []);

  const handleLogin = (provider) => {
    window.location.href = `http://localhost:8080/api/v1/oauth2/authorization/${provider}`;
  };

  const handleOAuth2Success = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/login/oauth2/success', {
        method: 'GET',
        credentials: 'include'
      });

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

  return (
    <div className="App">
      <h1>OAuth2 Login Example</h1>
      <button onClick={() => handleLogin('google')}>Login with Google</button>
      <button onClick={() => handleLogin('kakao')}>Login with Kakao</button>
      <button onClick={() => handleLogin('naver')}>Login with Naver</button>
    </div>
  );
}

export default Test;
