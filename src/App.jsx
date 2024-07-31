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
  return (
    <RouterProvider router={router} />
  )
}

export default App
