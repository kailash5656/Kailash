import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='Navbar'>
        <Link to="/" className='nav-link'>
        Home
        </Link>
        <Link to="/userlist" className='nav-link'>
        UserList
        </Link>
    </nav>
  )
}
