import React, { Fragment, useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import './Header.css';

// Imagenes
const slides = [
  'media/imagen0.jpg',
  'media/imagen1.jpg',
  'media/imagen2.jpg',
  'media/imagen3.jpg',
  'media/imagen4.jpg',
  'media/imagen5.jpg',
];

const Header = () => {
  // Uso de react-spring
  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });
  useEffect(() => {
    const t = setInterval(
      () => set((state) => (state + 1) % slides.length),
      2500
    );
    return () => clearTimeout(t);
  }, []);

  return (
    <Fragment>
      <div className="">
        {transitions((style, i) => (
          <animated.div
            className="bg"
            style={{
              ...style,
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(156, 156, 156, 0.5)), url(${slides[i]})`,
            }}
          />
        ))}
      </div>

      <div className="header">
        <div className="container header-texto ">
          <h1 className="display-1">DibeAnime!</h1>
          <p className="lead">Información de Anime en un solo lugar.</p>
          <div className="scroll-icon">&or;</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
