import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import '../App.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SideBar from '../components/Sidebar'
import { DarkMode } from '../store/DarkMode'

const DefaultLayout = () => {
  const isDark = useRecoilValue(DarkMode)
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    if (isDark) setTheme('dark')
    else setTheme('garden')
  }, [isDark])

  return (
    <div
      data-theme={theme}
      className="text-base-content bg-base-100 flex flex-col min-h-screen"
    >
      <header>
        <Navbar />
      </header>
      <main className="grow flex">
        <div className="flex-none h-f bg-base-200">
          <SideBar />
        </div>
        <div className="flex-auto justify-center">
          <div className="w-11/12 mx-auto my-8">
            <Outlet />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default DefaultLayout
