import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
import menu from '../../assets/logo/menu.svg'
{/* <link rel="stylesheet" href="https//unpkg.com/boxicons@2.1.4/css/boxicons.min.css" /> */}
const Nav = () => {
  return (
    <header className='header'>
        <a href="/" className='logo'>Hayk.</a>
        <div className='bx-bt-menu' id='menu-icon'></div>

      <div className='navbar'>
        <NavLink to={'/'} className="nav">Home</NavLink>
        <NavLink to={'/about'} className="nav">About</NavLink>
        <NavLink to={'/education'} className="nav">Education</NavLink>
        <NavLink to={'/projects'} className="nav">Projects</NavLink>
      </div>
    </header>
  )
}

export default Nav