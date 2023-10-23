import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/main';

export default function Routes() {
  const routeList = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
    },
  ]);

  return <RouterProvider router={routeList} />;
}
