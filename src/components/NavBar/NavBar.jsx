import { NavLink } from 'react'

export default function NavBar({ user }) {
  return (
    <nav>
        <NavLink to='/newsfeed'>News Feed</NavLink>  
        <NavLink to='/sign-out'>Sign Out</NavLink>   

    </nav>
    
  )
}
