import React, { useContext } from 'react';
import { AnimeContext } from '../../contexts/AnimeContext';

const ListaCategorias = () => {
  const { guardarCategoria } = useContext(AnimeContext);
  const consultarCategoria = (e) => {
    guardarCategoria(e.target.value);
  };

  return (
    <ul className="w-100">
      <div className="list-group">
        <button
          onClick={(e) => {
            consultarCategoria(e);
          }}
          type="button"
          value="score"
          className="list-group-item list-group-item-action"
        >
          Top Rated Anime
        </button>
        <button
          onClick={(e) => {
            consultarCategoria(e);
          }}
          type="button"
          value="members"
          className="list-group-item list-group-item-action"
        >
          Popular Anime
        </button>
      </div>
    </ul>
  );
};

export default ListaCategorias;
