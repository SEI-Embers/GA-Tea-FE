import { NavLink } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <nav className='footer font-mono text-white fixed bottom-0 w-full h-10 flex text-xs justify-around'>
      <NavLink to='/about' className='hover:underline'
      style={{textShadow: '1px 1px 15px rgba(0, 0, 0, 0.3)'}}>About</NavLink>
      <NavLink to='/meet-the-team' className='hover:underline'
      style={{textShadow: '1px 1px 15px rgba(0, 0, 0, 0.3)'}}>Meet The Team</NavLink>
      <div 
      style={{textShadow: '1px 1px 15px rgba(0, 0, 0, 0.3)'}}>9<span className="text-sm">2</span>59 © {year}</div>
    </nav>
  )
}
