import { useEffect, VFC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { DarkMode } from '../store/DarkMode'
import { GlobalCart } from '../store/GlobalCart'
import { NarrowSidebar } from '../store/NarrowSidebar'

const Logout: VFC = () => {
  const setDark = useSetRecoilState(DarkMode)
  const setCart = useSetRecoilState(GlobalCart)
  const setNarrow = useSetRecoilState(NarrowSidebar)
  const navigate = useNavigate()

  useEffect(() => {
    setDark(false)
    setCart([])
    setNarrow(false)
    navigate('/login')
  })

  return (
    <div className="stats bg-warning text-warning-content w-80">
      <div className="stat">
        <div className="stat-title text-2xl">Logout in</div>
        <div className="stat-value text-5xl text-center">Progress...</div>
      </div>
    </div>
  )
}

export default Logout
