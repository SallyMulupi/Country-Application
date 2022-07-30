import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header className='header'>
        <div className='logo'>The World <span>Link</span></div>
        <nav>
            <ul>
               <li><Link to='/'>Country</Link></li> 
               <li> <Link to='/new-country'>New-Country</Link></li>
               <li> <Link to='/favorites'>Favorite-Country</Link></li>
            </ul>
        </nav>
    </header>
    
  )
}

export default NavBar