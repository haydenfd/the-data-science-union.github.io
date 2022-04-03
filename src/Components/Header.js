import React from 'react';
import InstagramFooterLogo from './Logos/contact-logos/InstagramFooterLogo.svg';
import FaceBookFooterLogo from './Logos/contact-logos/FacebookFooterLogo.svg';
import DSULogo from './Logos/contact-logos/DSULogo.svg'

function Header() {
  return (
    <div className="navbar-container">
      <img src={DSULogo} alt="DSU Logo" className="navbar-child navbar-logo" />
      <p className="navbar-child">About Us</p>
      <p className="navbar-child">The Team</p>
      <p className="navbar-child">Projects</p>
      <p className="navbar-child">For Clients</p>
      <p className="navbar-child">Join Us</p>
    </div>
  )
}

export default Header;