import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import DiaryList from './pages/DiaryList';
import WriteDiary from './pages/WriteDiary';
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
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
