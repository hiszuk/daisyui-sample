import { VFC } from 'react'
import { Link } from 'react-router-dom'
import { baseDir } from '../utils/config'

const NotFound: VFC = () => {
  return (
    <div className="stats bg-warning text-warning-content w-80">
      <div className="stat">
        <div className="stat-title text-2xl">Page Not Found...</div>
        <div className="stat-value text-7xl text-center">404</div>
        <div className="stat-actions text-right">
          <Link to={`${baseDir}`}>
            <button className="btn btn-secondary">GO HOME</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
