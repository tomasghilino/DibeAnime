import React, { useEffect, useState, Fragment, useContext } from 'react';
import AnimeCard from '../AnimeCard/AnimeCard';
import axios from 'axios';
import './ListadoDefault.css';
import { AnimeContext } from '../../contexts/AnimeContext';

const ListadoDefault = () => {
  const [busquedaAnime, guardarBusquedaCategorias] = useState([]);
  const { consultar, categoria } = useContext(AnimeContext);

  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = `https://api.jikan.moe/v3/search/anime?q=&order_by=${categoria}&limit=9`;

      const animes = await axios.get(url);

      guardarBusquedaCategorias(animes.data.results);
    };

    obtenerCategorias();
  }, [categoria]);

  if (consultar) return null;
  return (
    <Fragment>
      <div className="d-inline-flex flex-wrap p-4 row g-5">
        <h1 className="listado-texto">
          {categoria === 'score' ? 'Top Rated Anime' : 'Popular Anime'}
        </h1>
        {busquedaAnime.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </Fragment>
  );
};

export default ListadoDefault;
