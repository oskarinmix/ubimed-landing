import React from "react";
import Newsletter from "./Newsletter";
import Cards from "./Cards";
const Telemedicine = () => {
  return (
    <div className="telemedicine">
      <img src="/img/telemonitoreo.jpg" />
      <div className="content">
        <h1>Telemedicina</h1>
        <p>
          Ubimed, es la mejor opción para estar en comunicación con pacientes y
          profesionales de la salud sin salir de casa, manteniendo la
          rigurosidad del acto médico, ofertando siempre un servicio con
          calidad, oportunidad y accesibilidad.
        </p>
        <button>
          <a href="/telemedicina">Leer Más</a>
        </button>
      </div>

      {/*
      <Newsletter />
      */}
    </div>
  );
};

export default Telemedicine;
