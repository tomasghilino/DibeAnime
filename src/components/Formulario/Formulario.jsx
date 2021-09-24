import React, { useState, useContext } from 'react';
import Error from '../Error/Error';
import { AnimeContext } from '../../contexts/AnimeContext';
import './Formulario.css';

const Formulario = () => {
  const { guardarInputCtx, guardarConsultar } = useContext(AnimeContext);

  // states
  const [input, guardarInput] = useState('');
  const [error, guardarError] = useState(false);

  // función para leer los contenidos
  const obtenerInput = (e) => {
    guardarInput(e.target.value);
  };

  // cuando usuario da submit
  const buscarAnime = () => {
    // VALIDACION DEL FORM
    guardarInputCtx(input);
    if (input.trim() === '') {
      guardarError(true);
      guardarConsultar(false);
      return;
    }
    guardarError(false);

    // Todo bien, pasar al componente principal

    guardarConsultar(true);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        buscarAnime();
      }}
      className="mt-5"
    >
      <div className="form-group text-center container mb-3">
        <label>
          <h2 className="form-texto">Ingrese un Anime o Manga</h2>
        </label>
        <div className="">
          <input
            type="text"
            placeholder="Ejemplo: Naruto"
            className="form-control col-md-8 mb-4"
            onChange={obtenerInput}
          />

          <button type="submit" className="btn-lg btn-primary w-100">
            Buscar
          </button>
        </div>
        {error ? <Error mensaje="La busqueda es incorrecta." /> : null}
      </div>
    </form>
  );
};

export default Formulario;
