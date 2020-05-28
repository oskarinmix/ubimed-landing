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
    </React.Fragment>
  );
};

export default Doctors;
