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
          <div className="d-flex justify-content-between">
            <p className="card-text">{anime.mal_id}</p>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Launch vertically centered modal
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
