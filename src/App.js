import React, { Fragment, useState } from 'react';

//Componentes
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Formulario from './components/Formulario/Formulario';
import ListadoBusqueda from './components/ListadoBusqueda/ListadoBusqueda';
import ListaCategorias from './components/ListaCategorias/ListaCategorias';
import Footer from './components/Footer/Footer';

function App() {
  const [busqueda, guardarBusqueda] = useState('');

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
          <div className="col-sm-10">
            <div className="container">
              <Formulario guardarBusqueda={guardarBusqueda} />
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
