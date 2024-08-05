import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import DiaryList from './pages/DiaryList';
import WriteDiary from './pages/WriteDiary';
import LoginPageEmail from './pages/LoginPage.Email';
import RegisterPage from './pages/RegisterPage';
import RegisterPageEmail from './pages/RegisterPage.email';
import RegisterPageWord from './pages/RegisterPage.word';
import RegisterPageProfile from './pages/RegisterPage.profile';
import RegisterPageFinal from './pages/RegisterPage.final';
import WriteFreeDiary from './pages/WriteFreeDiary';
import OAuth2Naver from './pages/OAuth2Naver';
import OAuth2Google from './pages/OAuth2Google';
import OAuth2Kakao from './pages/OAuth2Kakao';
import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/login/email',
    element: <LoginPageEmail />,
  },
  {
    path: '/login/oauth2/code/naver',
    element: <OAuth2Naver />,
  },
  {
    path: '/login/oauth2/code/google',
    element: <OAuth2Google />,
  },
  {
    path: '/login/oauth2/code/kakao',
    element: <OAuth2Kakao />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/register/email',
    element: <RegisterPageEmail />,
  },
  {
    path: '/register/word',
    element: <RegisterPageWord />,
  },
  {
    path: '/register/profile',
    element: <RegisterPageProfile/>,
  },
  {
    path: '/register/final',
    element: <RegisterPageFinal />,
  },
  {
    path: '/user',
    element: <UserPage />,
  },  
  {
    path: '/diary',
    element: <DiaryList />,
  },
  {
    path: '/writeDiary',
    element: <WriteDiary />,
  },
  {
    path: '/writeFreeDiary',
    element: <WriteFreeDiary />,
  },
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // 3초 후에 로딩 상태를 해제
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // 타이머 정리
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    {isLoading ? <Loading /> : <RouterProvider router={router} />}
    </>
  )
}

export default App
