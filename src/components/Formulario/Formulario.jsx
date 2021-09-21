import React from 'react';
import './Formulario.css';

const Formulario = () => {
  return (
    <form className="mt-5">
      <div className="form-group text-center container">
        <label>
          <h2 className="form-texto">Ingrese un Anime o Manga</h2>
        </label>
        <div className="d-md-flex">
          <input
            type="text"
            placeholder="Ejemplo: Naruto"
            className="form-control col-md-8"
          />

          <button type="submit" className="btn-lg btn-primary w-100">
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
};

export default Formulario;
