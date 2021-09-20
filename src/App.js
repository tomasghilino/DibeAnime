import React, { Fragment } from 'react';

//Componentes
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Formulario from './components/Formulario/Formulario';
import ListadoBusqueda from './components/ListadoBusqueda/ListadoBusqueda';
import ListaCategorias from './components/ListaCategorias/ListaCategorias';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Header />

      <div className="main">
        <div className="row">
          <div className="col-md-2">
            <div className="container">
              <ListaCategorias />
            </div>
          </div>
          <div className="col-md-10">
            <div className="container">
              <Formulario />
              <ListadoBusqueda /> {/* carga condicional mas adelante */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
