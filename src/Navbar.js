import React from 'react';
import './App.css';
import logo from './logo.jpg';

function Navbar() {
  return (
    <div className="navbar-wrapper" >
        <img src={logo} className="ee-logo" alt="Explore Edinburgh Logo" />
    </div>
  );
}

export default Navbar;
