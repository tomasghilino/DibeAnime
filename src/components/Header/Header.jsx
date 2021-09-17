import React, { Fragment } from 'react';
import './Header.css';

const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <div class="container header-texto ">
          <h1 class="display-1">DibeAnime!</h1>
          <p class="lead">Información de Anime en un solo lugar.</p>
          <div className="scroll-icon">&or;</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
