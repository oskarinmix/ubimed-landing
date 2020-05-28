import React from "react";
import Head from "next/head";
const TopHeader = () => {
  return (
    <React.Fragment>
      <Head>
        <link href="/fa/css/fontawesome.css" rel="stylesheet" />
        <link href="/fa/css/brands.css" rel="stylesheet" />
        <link href="/fa/css/solid.css" rel="stylesheet" />
      </Head>

      <div className="top-header" id="inicio">
        <div className="contact">
          <p>
            <a href="tel:+573128772788">
              <i className="fas fa-phone"></i>
              <span>+57 312 8772788</span>
            </a>
          </p>
          <p>
            <a href="mailto:contacto@ubimed.com.co">
              <i className="fas fa-envelope"></i>
              <span>contacto@ubimed.com.co</span>
            </a>
          </p>
        </div>
        <div className="socials">
          <a href="https://www.facebook.com/UbimedappCol/" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/ubimedappcolombia/"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=573128772788&text=Hola!+¡Quiero+conocer+más+acerca+de+Ubimed!."
            target="_blank"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopHeader;
