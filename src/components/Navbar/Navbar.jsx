import React from 'react';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-logo">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="navbar-botones">
          <button className="boton">Inicio</button>
          <button className="boton">Inicio</button>
          <button className="boton">Inicio</button>
        </div>
    </div>
  );
};

export default Navbar;
