import React from "react";

const Cards = () => {
  return (
    <React.Fragment>
      <div className="cards" id="soporte">
        <div className="card">
          <div className="round">1</div>
          <h1>Elije a un Profesional</h1>
          <p>
            Selecciona uno de los múltiples profesionales de salud que hay en la
            plataforma
          </p>
          <img src="/img/card1.png" />
        </div>
        <div className="card">
          <div className="round">2</div>
          <h1>Agenda tu cita</h1>
          <p>
            Elige la hora y fecha mas apropiada para ti, evitando barreras
            administrativas
          </p>
          <img src="/img/card2.png" />
        </div>
        <div className="card">
          <div className="round">3</div>
          <h1>Realiza el pago</h1>
          <p>
            Realiza los pagos de tus consultas directamente a tu profesional o
            institución tratante
          </p>
          <img src="/img/card3.png" />
        </div>
        <div className="card">
          <div className="round">4</div>
          <h1>Videoconsulta</h1>
          <p>
            En videollamada puedes recibir, imágenes,documentos y videos que
            serán parte de tu historia clínica
          </p>
          <img src="/img/card4.png" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cards;
