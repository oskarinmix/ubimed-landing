import React from "react";
import Head from "next/head";
const Header = ({ session, id }) => {
  return (
    <React.Fragment>
      <Head>
        <link href="/fa/css/fontawesome.css" rel="stylesheet" />
        <link href="/fa/css/brands.css" rel="stylesheet" />
        <link href="/fa/css/solid.css" rel="stylesheet" />
      </Head>
      <div className="header" id={id ? id : ""}>
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <div className="menu-nav">
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#servicios">Servicios </a>
              <i className="fa fa-chevron-down"></i>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
            <li>
              <a href="#soporte">Soporte</a>
            </li>
          </ul>
          {session && <button> Iniciar Sesión</button>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
