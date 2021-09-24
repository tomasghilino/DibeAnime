import React, { Fragment } from 'react';

//Componentes
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Formulario from './components/Formulario/Formulario';
import ListadoBusqueda from './components/ListadoBusqueda/ListadoBusqueda';
import ListaCategorias from './components/ListaCategorias/ListaCategorias';
import ListadoDefault from './components/ListadoDefault/ListadoDefault';
import Footer from './components/Footer/Footer';

// Providers
import AnimeProvider from './contexts/AnimeContext';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <AnimeProvider>
        <div className="main">
          <div className="row">
            <ListaCategorias />
            <div className="col-md-10">
              <div className="mb-5">
                <Formulario />
                <ListadoBusqueda />
                <ListadoDefault />
              </div>
            </div>
          </div>
        </div>
      </AnimeProvider>
      <Footer />
    </Fragment>
  );
}

export default App;
