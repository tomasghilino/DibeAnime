import React, { Fragment } from 'react';
import { FaGithub } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './Footer.css';

const Footer = () => {
  const scrollInicio = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Fragment>
      <footer>
        <div className="container d-lg-flex justify-content-around mt-5">
          <div>
            <button
              className="logo p-0 lh-1 mb-5 fs-1"
              onClick={() => scrollInicio()}
            >
              Dibe<span>Anime</span>
            </button>
          </div>

          <div>
            <h2 className="mb-5">Redes Sociales</h2>

            <ul className="d-md-flex flex-column align-content-center">
              <div className="link">
                <IconContext.Provider value={{ className: 'github-icon' }}>
                  <FaGithub />
                </IconContext.Provider>
                <a
                  href="https://github.com/tomasghilino/DibeAnime/tree/master"
                  className="link"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  GitHub de la Página
                </a>
              </div>

              <div className="link">
                <IconContext.Provider value={{ className: 'github-icon' }}>
                  <FaGithub />
                </IconContext.Provider>
                <a
                  href="https://github.com/tomasghilino"
                  className="link"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  Tomás Ghilino
                </a>
              </div>

              <div className="link">
                <IconContext.Provider value={{ className: 'github-icon' }}>
                  <FaGithub />
                </IconContext.Provider>
                <a
                  href="https://github.com/FrancoBrumatti"
                  className="link"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  Franco Brumatti
                </a>
              </div>
            </ul>
          </div>

          <div className="tecnologias">
            <h2 className="mb-5">Tecnologías utilizadas.</h2>

            <div className="d-sm-flex justify-content-between">
              <a
                href="https://es.reactjs.org"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <img src="/logo192.png" alt="react logo" />
              </a>
              <a
                href="https://react-spring.io"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <img src="/media/spring-icon.png" alt="react spring logo" />
              </a>
              <a
                href="https://getbootstrap.com"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <img src="/media/boostrap.png" alt="boostrap logo" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
