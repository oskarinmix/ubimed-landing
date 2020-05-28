import React from "react";

const Medics = () => {
  return (
    <React.Fragment>
      <div className="title-dark">
        <h1>
          Conoce nuestros profesionales de la salud y se parte de la red de
          Ubimed
        </h1>
        <div className="buttons">
          <button>Ingresa</button> <button>Regístrate</button>
        </div>
      </div>
      <div className="medics">
        <h1>Ubimed el mejor aliado de los profesionales de la salud</h1>
        <p>
          Si estás pensando en llevar oportunidad, accesibilidad, continuidad,
          cobertura, seguridad y calidad en la prestación de los servicios de
          salud en modalidad de telemedicina a todos tus pacientes solo debes
          registrarte en nuestra plataforma y podrás obtener los siguientes
          beneficios:
        </p>
        <div className="content">
          <div className="consulta">
            Comunicación bidireccional por telemedicina interactiva y no
            interactiva con todos tus pacientes sin importar donde estén
            ubicados
          </div>
          <div className="agenda">Gestionar tu agenda </div>
          <div className="historia"> Diligenciar la Historia clínica </div>
          <div className="consulta"> Obtener el consentimiento informado de tus pacientes </div>
          <div className="agenda">
            Puedes enviar y recibir fotos, imágenes, documentos y videos, estos
            serán parte integral de la historia clínica
          </div>
          <div className="historia">
            Podrás agendar y gestionar las juntas médicas que requieras, hasta
            10 participantes
          </div>
          <div className="consulta"> Podrás ser interoperable con otras Historias Clínicas </div>
          <div className="agenda"> Podrás validar tu firma electrónica </div>
          <div className="historia">
            Recibir los pagos de las videoconsultas, teleconsultas y cuotas
            moderadoras de tus pacientes
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Medics;
