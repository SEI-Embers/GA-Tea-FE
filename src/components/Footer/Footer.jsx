import { NavLink } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <nav className='footer font-mono'>
      <NavLink to='/about' className='hover:underline'>About</NavLink>
      <NavLink to='/meet-the-team' className='hover:underline'>Meet The Team</NavLink>
      <div>9<span>2</span>59 © {year}</div>
    </nav>
  )
}
