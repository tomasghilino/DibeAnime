import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ModalAnimeCard from './ModalAnimeCard';
import './AnimeCard.css';

const AnimeCard = ({ anime }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="col-lg-3">
      <div className="card h-100 border-0">
        <p className="card-text text-center fw-bold lh-1">{anime.title}</p>
        <img className="card-img h-100" src={anime.image_url} alt="" />
        <div className="card-img-overlay h-100 animecard-overlay align-items-center">
          <div className="d-block">
            <p className="m-0 fw-bold">
              &#11088; <span>{anime.score}</span>
            </p>
            <p className="mb-2 fw-bold">
              Episodios: <span>{anime.episodes}</span>
            </p>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Ver Información
            </Button>
          </div>
        </div>
        <ModalAnimeCard
          anime={anime}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
};

export default AnimeCard;
