import React, { useContext } from 'react';
import AnimeCard from '../AnimeCard/AnimeCard';
import { AnimeContext } from '../../contexts/AnimeContext';
import './ListadoBusqueda.css';

const ListadoBusqueda = () => {
  const { busquedaAnime, consultar } = useContext(AnimeContext);

  if (Object.keys(busquedaAnime).length === 0 || !consultar) return null;
  //Busqueda vacia *arreglar*
  return (
    <div className="listado">
      {busquedaAnime.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
};

export default ListadoBusqueda;
