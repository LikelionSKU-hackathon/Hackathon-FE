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
import Test from './pages/Test';
import OAuthRedirectHandler from './pages/OAuthRedirectHandeler';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/main',
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
    path: '/oauth2/',
    element: <OAuthRedirectHandler />,
  },
  {
    path: '/oauth2/redirect',
    element: <OAuthRedirectHandler />,
  },
  {
    path: '/oauth2/success',
    element: <OAuthRedirectHandler />,
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
  {
    path: '/test',
    element: <Test />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
