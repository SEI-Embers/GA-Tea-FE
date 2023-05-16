import { NavLink } from 'react-router-dom'
import './NavBar.css'

export default function NavBar({ user }) {
  return (
    <nav className='top-nav'>
        <div>
        {user && <div className="welcome">Welcome, {user.username}</div>}
        </div>
        <NavLink to='/newsfeed'>News Feed</NavLink>  
        <NavLink to='/sign-out'>Sign Out</NavLink>   
    </nav>
  )
}
