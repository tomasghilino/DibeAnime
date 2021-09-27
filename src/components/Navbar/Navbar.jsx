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

  const scrollInicio = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  const scrollBusqueda = () => {
    window.scrollTo({
      top: 873,
      behavior: "smooth"
    });
  }
  return (
    <div className={color ? 'navbar' : 'navbar navbar-colored'}>
      <div className="navbar-contenido">
        
        <button
          className="logo"
          onClick={() => scrollInicio()}
        >
          Dibe<span>Anime</span>
        </button>
  
        <div className="navbar-botones">
          <button
           className="boton"
           onClick={() => scrollInicio()}
          >Inicio</button>
          <button
           className="boton"
           onClick={() => scrollBusqueda()} 
          >Busqueda</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
