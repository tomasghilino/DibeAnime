import React, { useContext } from 'react';
import './ListaCategorias.css';
import { AnimeContext } from '../../contexts/AnimeContext';

const ListaCategorias = () => {
  const { guardarCategoria } = useContext(AnimeContext);
  const consultarCategoria = (e) => {
    guardarCategoria(e.target.value);
  };
  return (
    <div className="col-md-2 mt-5">
      <ul className="lista">
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
    </div>
  );
};

export default ListaCategorias;
