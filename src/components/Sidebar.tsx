import { VFC, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { NarrowSidebar } from '../store/NarrowSidebar'

const paths = ['/', '/info', '/stats']

const SidebarWide: VFC = () => {
  const active = 'text-primary-content bg-primary'
  const [classNames, setClassNames] = useState<string[]>([active, '', ''])
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    const selected = paths.findIndex((url) => url === path ) || 0
    const newClassNames = classNames.map((cls, index) => (
      (index === selected) ? active : ''
    ))
    setClassNames(newClassNames)
  }, [location])

  return (
    <ul className="menu bg-base-200 w-48">
      <li className={classNames[0]}>
        <Link to={paths[0]}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          Home
        </Link>
      </li>
      <li className={classNames[1]}>
        <Link to={paths[1]}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Info
        </Link>
      </li>
      <li className={classNames[2]}>
        <Link to={paths[2]}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          Stats
        </Link>
      </li>
    </ul>
  )
}

const SidebarNarrow: VFC = () => {
  const active = 'text-primary-content bg-primary'
  const [classNames, setClassNames] = useState<string[]>([active, '', ''])
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    const selected = paths.findIndex((url) => url === path ) || 0
    const newClassNames = classNames.map((cls, index) => (
      (index === selected) ? active : ''
    ))
    setClassNames(newClassNames)
  }, [location])

  return (
    <ul className="menu bg-base-200">
      <li className={classNames[0]}>
        <div className="tooltip tooltip-right tooltip-secondary z-40" data-tip="Home">
          <Link to={paths[0]}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          </Link>
        </div>
      </li>
      <li className={classNames[1]}>
        <div className="tooltip tooltip-right tooltip-secondary z-40" data-tip="Info">
          <Link to={paths[1]}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </Link>
        </div>
      </li>
      <li className={classNames[2]}>
        <div className="tooltip tooltip-right tooltip-secondary z-40" data-tip="Stats">
          <Link to={paths[2]}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          </Link>
        </div>
      </li>
    </ul>
  )
}

const SideBar: VFC = () => {
  const isNarrowSidebar = useRecoilValue(NarrowSidebar)

  return (
    <>
      {isNarrowSidebar ? <SidebarNarrow /> : <SidebarWide />}
    </>
  )
}

export default SideBar

