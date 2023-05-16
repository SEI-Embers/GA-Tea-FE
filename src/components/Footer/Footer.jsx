import { NavLink } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const today = new Date().getFullYear()

  return (
    <nav className='footer'>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/meet-the-team'>Meet The Team</NavLink>
      <div>9<span>2</span>59 © {today}</div>
    </nav>
  )
}
