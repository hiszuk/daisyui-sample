import { Navigate, useRoutes } from 'react-router-dom'

import DefaultLayout from './Layouts/DefaultLayout'
import SimpleLayout from './Layouts/SimpleLayout'
import Home from './pages/Home'
import InfoPage from './pages/Info'
import StatsPage from './pages/Stats'
import Login from './pages/Login'
import Logout from './pages/Logout'
import NotFound from './pages/NotFound'
import { baseDir } from './utils/config'

export const RootRouter = () => {
  return useRoutes([
    {
      element: <DefaultLayout />,
      children: [
        { path: `${baseDir}/`, element: <Home /> },
        { path: `${baseDir}/info`, element: <InfoPage /> },
        { path: `${baseDir}/stats`, element: <StatsPage /> },
      ]
    },
    {
      element: <SimpleLayout />,
      children: [
        { path: `${baseDir}/login`, element: <Login /> },
        { path: `${baseDir}/logout`, element: <Logout /> },
        { path: `${baseDir}/404`, element: <NotFound /> },
      ]
    },
    { path: '*', element: <Navigate to={`${baseDir}/404`} /> },
  ])
}