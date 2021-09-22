import React from 'react';

const AnimeCard = ({ anime }) => {
  return (
    <div className="col-lg-3">
      <div className="card">
        <img className="card-img-top" src={anime.image_url} alt="" />
        <div className="card-body">
          <p className="card-text">{anime.mal_id}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
