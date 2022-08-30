import React from 'react'
import style from './Navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='navbar'>
      <a href='/' className='site-title'>TEST</a>
      <ul>
          <a href='/about'><li>About</li></a>
          <a href='/project'><li>Project</li></a>
          <a href='/contact'><li>Contact</li></a>
      </ul>
    </nav>
  )
}

export default Navbar