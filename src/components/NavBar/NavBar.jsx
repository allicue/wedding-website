import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar(props) {
  return (
    <div id='navbar'>
      <div className='nav-logo'>
        <Link className='link' to='/'><h1 className='logo'>SHAWN & ALLISON</h1><h1 className='logo-initals'>S & A</h1></Link>
      </div>

      <div className='nav-links-container'>
        <Link className='link' to='/rsvp'><p className='nav-links'>RSVP</p></Link>
        <Link className='link' to='/FAQ'><p className='nav-links'>FAQ</p></Link>
        <Link className='link' to='/travel'><p className='nav-links'>TRAVEL</p></Link>
        <Link className='link' to='/registry'><p className='nav-links'>REGISTRY</p></Link>
      </div>

    </div>
  );
}

export default NavBar;