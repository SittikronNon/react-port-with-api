import React from 'react'
import style from './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/' className='site-title'>Sittikron</Link>
      <ul>
        <Link to='/about'>About</Link>
        <Link to='/project'>Project</Link>
        <Link to='/contact'>Contact</Link>

      </ul>
    </nav>
  )
}

export default Navbar