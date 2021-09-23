import React from 'react';
import './AnimeCard.css'

const AnimeCard = ({ anime }) => {
  return (
    <div className="col-lg-3">
      <div className="card h-100 border-0">
        <div className="animecard-titulo">
         <p className="card-text text-center">{anime.title}</p>
        </div>
        <img className="card-img h-100" src={anime.image_url} alt="" />
        <div className="card-img-overlay h-100 animecard-overlay">
          <p className="card-text">{anime.mal_id}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;