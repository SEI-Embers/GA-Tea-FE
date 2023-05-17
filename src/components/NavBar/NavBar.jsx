import { NavLink } from 'react-router-dom'

export default function NavBar({ user }) {
  return (
    <nav className='h-10 flex justify-between items-center border-b-2 border-black'>
        <div>
        {user && <div className="welcome">Welcome, {user.username}</div>}
        </div>
        <NavLink to='/newsfeed' className='hover:underline'>News Feed</NavLink>  
        <NavLink to='/sign-out' className='hover:underline'>Sign Out</NavLink>   
    </nav>
  )
}
