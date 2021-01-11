import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar(props) {
  return (
    <div id='navbar'>
      <div className='nav-logo'>
        <Link to='/'><h1>Shawn & Allison</h1></Link>
      </div>

      <div className='nav-links'>
        <Link to='/rsvp'><p>RSVP</p></Link>
        <Link to='/FAQ'><p>FAQ</p></Link>
        <Link to='/registry'><p>REGISTRY</p></Link>
      </div>

    </div>
  );
}

export default NavBar;