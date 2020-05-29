import React from "react";
import Head from "next/head";
import Link from "next/link";
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
          <Link href="/">
            <img src="/img/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="menu-nav">
          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <div className="submenu">
              <li>
                Servicios
                <i className="fa fa-chevron-down"></i>
              </li>
              <div className="post-submenu">
                <li>
                  <Link href="/telemedicina">
                    <a>Telemedicina</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#consultoria">
                    <a>Consultoría</a>
                  </Link>
                </li>
              </div>
            </div>

            <li>
              <Link href="/#contacto">
                <a>Contacto</a>
              </Link>
            </li>
            <div className="submenu">
              <li>
                <i className="fas fa-ellipsis-h"></i>
              </li>
              {session && (
                <div className="post-submenu">
                  <li>Soporte</li>
                  <li>PQRS</li>
                </div>
              )}
            </div>
          </ul>
          {session && <button> Iniciar Sesión</button>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
