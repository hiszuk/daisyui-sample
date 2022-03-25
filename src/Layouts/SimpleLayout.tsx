import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { DarkMode } from '../store/DarkMode'
import '../App.css'

const SimpleLayout = () => {
  const isDark = useRecoilValue(DarkMode)
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    if (isDark) setTheme('dark')
    else setTheme('garden')
  }, [isDark])

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-gray-800">
      <div data-theme={theme}>
        <Outlet />
      </div>
    </main>
  )
}

export default SimpleLayout