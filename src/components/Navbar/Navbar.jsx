import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [color, setColor] = useState(true);

  const navbarColor = () => {
    if (window.scrollY > 873) {
      setColor(false);
    }
    if (window.scrollY < 873) {
      setColor(true);
    }
  };
  window.addEventListener('scroll', navbarColor);

  return (
    <div className={color ? 'navbar' : 'navbar navbar-colored'}>
      <div className="navbar-contenido">
        <div className="navbar-logo">
          <h1 className="logo">
            Dibe<span>Anime</span>
          </h1>
        </div>
        <div className="navbar-botones">
          <button className="boton">Inicio</button>
          <button className="boton">Busqueda</button>
          <button className="boton">Nosotros</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
