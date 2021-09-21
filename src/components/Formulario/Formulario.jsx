import React, { useState } from 'react';
import Error from '../Error/Error';
import './Formulario.css';

const Formulario = ({ guardarBusqueda }) => {
  // states
  const [input, guardarInput] = useState('');
  const [error, guardarError] = useState(false);

  // función para leer los contenidos
  const obtenerInput = (e) => {
    guardarInput(e.target.value);
  };

  // cuando usuario da submit
  const buscarAnime = (e) => {
    e.preventDefault();
    // VALIDACION DEL FORM
    if (input.trim() === '') {
      guardarError(true);
      return;
    }
    guardarError(false);

    // Todo bien, pasar al componente principal
    guardarBusqueda(input);
  };

  return (
    <form onSubmit={buscarAnime} className="mt-5">
      <div className="form-group text-center container">
        <label>
          <h2 className="form-texto">Ingrese un Anime o Manga</h2>
        </label>
        <div className="d-md-flex">
          <input
            type="text"
            placeholder="Ejemplo: Naruto"
            className="form-control col-md-8"
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
