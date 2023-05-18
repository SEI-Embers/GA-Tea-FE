import { NavLink } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <nav className='footer font-mono fixed bottom-0 w-full h-10 flex text-xs justify-around'>
      <NavLink to='/about' className='hover:underline'>About</NavLink>
      <NavLink to='/meet-the-team' className='hover:underline'>Meet The Team</NavLink>
      <div>9<span className="text-sm">2</span>59 © {year}</div>
    </nav>
  )
}
