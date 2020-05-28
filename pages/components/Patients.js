import React from "react";

const Patients = () => {
  return (
    <React.Fragment>
      <div className="title">
        <h1>Nuestros Pacientes</h1>
        <p>Con Ubimed, podrás registrarte y obtener muchos beneficios en:</p>
      </div>
      <div className="patients">
        <div className="interactive">
          <ul>
            <li> Buscar y/o elegir un profesional de la salud </li>
            <li>
              Comunicarte con tu médico tratante a través de una videoconsulta
              en tiempo real
            </li>
            <li>
              Agendarte en la fecha y hora más apropiadas para ti, evitando
              barreras administrativas
            </li>
            <li> Gestionar tu mismo la historia clínica </li>
            <li>
              Puedes enviar y recibir fotos, imágenes, documentos y videos
              durante tu videoconsulta y estos serán parte integral de tu
              historia clínica
            </li>
          </ul>
        </div>
        <div className="interactive">
          <ul>
            <li>
              Podrás tener copia de tu historia clínica, tu consentimiento
              informado, formula e incapacidades y recomendaciones en el correo
              electrónico que registraste en la plataforma
            </li>
            <li>
              Programar de forma automática las alertas para que no olvides
              tomar tus medicamentos
            </li>
            <li>
              Realizar los pagos de tus consultas ó cuotas moderadoras
              directamente a tu profesional o institución tratante
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Patients;
