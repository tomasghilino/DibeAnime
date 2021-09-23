import React from 'react';
import './AnimeCard.css';


const AnimeCard = ({ anime }) => {
  return (
      <div className="animecard">
        <img className="animecard-img" src={anime.image_url} alt="" />
        <div className="animecard-body">
          <p className="animecard-text">{anime.mal_id}</p>
        </div>
      </div>
  );
};

export default AnimeCard;
