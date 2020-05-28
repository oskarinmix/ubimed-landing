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
              <a href="/">Inicio</a>
            </li>
            <div className="submenu">
              <li>
                Servicios
                <i className="fa fa-chevron-down"></i>
              </li>
              <div className="post-submenu">
                <li>
                  <a href="/telemedicina">Telemedicina</a>
                </li>
                <li>Consultoría</li>
              </div>
            </div>

            <li>
              <a href="#contacto">Contacto</a>
            </li>
            <div className="submenu">
              <li>
                <i class="fas fa-ellipsis-h"></i>
              </li>
              <div className="post-submenu">
                <li>Soporte</li>
                <li>PQRS</li>
              </div>
            </div>
          </ul>
          {session && <button> Iniciar Sesión</button>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
