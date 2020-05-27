import React from "react";

const Banner = () => {
  return (
    <React.Fragment>
      <div className="banner">
        <div className="content">
          <h1>Nuestros profesionales de la salud.</h1>
          <p>
            Ubimed el mejor aliado de los profesionales de la salud Si estás
            pensando en llevar oportunidad, accesibilidad, continuidad,
            cobertura, seguridad y calidad en la prestación de los servicios de
            salud en modalidad de telemedicina a todos tus pacientes solo debes
            registrarte en nuestra plataforma y podrás obtener los siguientes
            beneficios:
          </p>
          <ul>
            <li>
              Comunicación bidireccional por telemedicina interactiva y no
              interactiva con todos tus pacientes sin importar donde estén
              ubicados
            </li>
            <li>Gestionar tu agenda</li>
            <li> Diligenciar la Historia clínica</li>
            <li>Obtener el consentimiento informado de tus pacientes</li>
            <li>
              Puedes enviar y recibir fotos, imágenes, documentos y videos,
              estos serán parte integral de la historia clínica
            </li>
            <li>
              Podrás agendar y gestionar las juntas médicas que requieras, hasta
              10 participantes
            </li>
            <li>Podrás ser interoperable con otras Historias Clínicas</li>
            <li> Podrás validar tu firma electrónica </li>
            <li>
              Recibir los pagos de las videoconsultas, teleconsultas y cuotas
              moderadoras de tus pacientes
            </li>
          </ul>
        </div>
        <img src="/img/dr-rounded.png" alt="dr" />
      </div>
    </React.Fragment>
  );
};

export default Banner;
