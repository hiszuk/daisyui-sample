import { Navigate, useRoutes } from 'react-router-dom'

import DefaultLayout from './Layouts/DefaultLayout'
import SimpleLayout from './Layouts/SimpleLayout'
import Home from './pages/Home'
import InfoPage from './pages/Info'
import StatsPage from './pages/Stats'
import Login from './pages/Login'
import Logout from './pages/Logout'
import NotFound from './pages/NotFound'

export const RootRouter = () => {
  return useRoutes([
    {
      element: <DefaultLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "info", element: <InfoPage /> },
        { path: "stats", element: <StatsPage /> },
      ]
    },
    {
      element: <SimpleLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "logout", element: <Logout /> },
        { path: "404", element: <NotFound /> },
      ]
    },
    { path: '*', element: <Navigate to='404' /> },
  ])
}