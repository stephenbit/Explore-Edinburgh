import React from 'react';
import '../App.css';
import logo from '../logo.jpg';

function Navbar() {
  return (
    <div className="navbar-wrapper" >
      <div className="ee-logo-padding">
        <img src={logo} className="ee-logo" alt="Explore Edinburgh Logo" />
        </div>
    </div>
  );
}

export default Navbar;
