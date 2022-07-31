import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header className='header'>
        <div className='logo'> The World<span>Link</span></div>
        <nav>
            <ul>
               <li><Link to='/'>World</Link></li> 
               <li> <Link to='/AllCountries'>All Countries</Link></li>
               <li> <Link to='/CountryInfo'>Country Info</Link></li>
            </ul>
        </nav>
    </header>
    
  )
}

export default NavBar