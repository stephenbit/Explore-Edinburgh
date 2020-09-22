import React from 'react';
import '../App.css';
import logo from '../logo.jpg';

function Navbar() {
  return (
    <nav className="navbar-wrapper" >
      <div className="ee-logo-padding">
        <img src={logo} className="ee-logo" alt="Explore Edinburgh Logo" />
        </div>
    </nav>
  );
}

export default Navbar;
