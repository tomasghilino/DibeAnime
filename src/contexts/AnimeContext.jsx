import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear el Context
export const AnimeContext = createContext();

// Provider es donde se encuentran las funciones y state
const AnimeProvider = (props) => {
  // crear el state del Context
  const [input, guardarInputCtx] = useState('');
  const [busquedaAnime, guardarBusquedaAnime] = useState({});
  const [consultar, guardarConsultar] = useState(false);

  // ejecutar el llamado a la api
  useEffect(() => {
    if (consultar) {
      const obtenerAnimes = async () => {
        const url = `https://api.jikan.moe/v3/search/anime?q=${input}&limit=12`;

        const animes = await axios.get(url);

        guardarBusquedaAnime(animes.data.results);
      };

      obtenerAnimes();
    }
  }, [input, consultar]);

  return (
    <AnimeContext.Provider
      value={{
        consultar,
        busquedaAnime,
        guardarConsultar,
        guardarInputCtx,
      }}
    >
      {props.children}
    </AnimeContext.Provider>
  );
};
export default AnimeProvider;
