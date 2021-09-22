import React, { useContext } from 'react';
import AnimeCard from '../AnimeCard/AnimeCard';
import { AnimeContext } from '../../contexts/AnimeContext';

const ListadoBusqueda = () => {
  const { busquedaAnime } = useContext(AnimeContext);

  if (Object.keys(busquedaAnime).length === 0) return null;
  //Busqueda vacia *arreglar*
  return (
    <div className="row g-5">
      {busquedaAnime.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
};

export default ListadoBusqueda;
