import React from 'react';

export default function SocialLogin () {
  const handleNaverLogin = () => {
    window.location.href = 'http://localhost:8080/api/v1/oauth2/authorization/naver';
  };

  const handleKakaoLogin = () => {
    window.location.href = 'http://localhost:8080/api/v1/oauth2/authorization/kakao';
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:8080/api/v1/oauth2/authorization/google';
  };

  return (
    <div>
      <button onClick={handleNaverLogin} style={{ backgroundColor: '#03C75A', color: '#fff' }}>
        네이버로 로그인
      </button>
      <button onClick={handleKakaoLogin} style={{ backgroundColor: '#FEE500', color: '#000' }}>
        카카오로 로그인
      </button>
      <button onClick={handleGoogleLogin} style={{ backgroundColor: '#4285F4', color: '#fff' }}>
        구글로 로그인
      </button>
    </div>
  );
};


