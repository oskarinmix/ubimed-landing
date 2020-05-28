import React from "react";
import Patients from "./Patients";
import Medics from "./Medics";
import Telemonitoreo from "./Telemonitoreo";

const Telemedicine2 = () => {
  return (
    <React.Fragment>
      <div className="telemedicine-page">
        <h1 style={{ justifySelf: "flex-start" }}>Telemedicina</h1>
        <div className="content">
          <p style={{ textAlign: "left" }}>
            Ubimed, es la mejor opción para estar en comunicación con pacientes
            y profesionales de la salud sin salir de casa, manteniendo la
            rigurosidad del acto médico, ofertando siempre un servicio con
            calidad, oportunidad y accesibilidad.
          </p>

          <p style={{ textAlign: "center" }}>
            Ubimed Ips presta los servicios en modalidad de telemedicina
            interactiva a través de la Videoconsulta en tiempo real y no
            interactiva a través de la teleconsulta, chat médico en tiempo
            diferido.
          </p>

          <p style={{ textAlign: "right" }}>
            Tanto pacientes como profesionales de la salud dispondrán ahora de
            una solución eHealth diseñada con estándares nacionales e
            internacionales HIPAA y Fhir que garantizan la privacidad,
            confidencialidad, seguridad e interoperabilidad de la información
            clínica permitiendo ofertar y prestar nuestros servicios con los más
            altos estándares de calidad.
          </p>
        </div>
      </div>
      <Patients />
      <Medics />
      <Telemonitoreo />
      {/*
            <div className="register">
              <h1>Newsletter</h1>
              <input type="text" placeholder="Correo Electrónico" />
              <p className="content">
                Regístrate para recibir las últimas actualizaciones y notícias sobre
                salud y tecnología.
              </p>
            </div>
        */}
    </React.Fragment>
  );
};

export default Telemedicine2;
