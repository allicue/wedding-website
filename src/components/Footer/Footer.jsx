import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <div id='footer'>
      <Link className='footer-link questions-link' to='/FAQ'>Questions?</Link>
      <div className='icon-text'>Favicon made by Those Icons from <a  target='_blank' rel="noreferrer"className='footer-link' href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> <br></br>Website made by the bride. ✨</div>
    </div>
  );
}

export default Footer;