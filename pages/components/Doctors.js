import React from "react";

const Doctors = () => {
  return (
    <React.Fragment>
      <div className="doctors">
        <div className="doctors-content">
          <div className="text">
            <h2>Pacientes y</h2>
            <h1>Doctores</h1>
            <h3>Nunca estuvieron tan cerca </h3>
            <p>
              Mas de 10 años de experiencia en el diseño y la implementacion de
              modelos diferenciales de atencion en salud basadas en Tic en
              Colombia y Latinoamerica, nos dan la confianza para poner a tu
              disposicion nuestra tecnologíua para la consultoria y asesoría en
              el levantamiento y desarrollo de modelos a la medida teniendo en
              cuenta la necesidad del sector y de nuestros clientes
            </p>
          </div>
          <img src="/img/doctors.png" alt="doctors" />
        </div>
      </div>
      <div className="telemedicine">
        <div className="content">
          <h1>Telemedicina</h1>
          <p>
            Ubimed, es la mejor opción para estar en comunicación con pacientes
            y profesionales de la salud sin salir de casa, manteniendo la
            rigurosidad del acto médico, ofertando siempre un servicio con
            calidad, oportunidad y accesibilidad.
          </p>
        </div>
        <div className="register">
          <h1>Newsletter</h1>
          <input type="text" placeholder="Correo Electrónico" />
          <p className="content">
            Regístrate para recibir las últimas actualizaciones y notícias sobre
            salud y tecnología.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Doctors;
