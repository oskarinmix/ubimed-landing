import React from "react";

const Telemonitoreo = () => {
  return (
    <React.Fragment>
      <div className="title-dark">
        <h1>Telemonitoreo</h1>
      </div>
      <div className="telemonitoreo">
        <div className="content">
          <img src="/img/monitoreo.jpg" />
          <p>
            Con la tecnología Ubimed pacientes y proveedores de servicios de
            salud ahora podrán obtener la mejor experiencia en la atención
            Domiciliaria a través de la Monitorización permanente de sus
            variables clínicas.
          </p>
          <p>
            El sistema de Telemonitoreo Ubimed permite la transmisión de datos
            clínicos y la interacción con su médico tratante en tiempo real, fue
            especialmente diseñado para atender la demanda de pacientes con
            patologías crónicas, hospital domiciliario o para pacientes que
            necesitan transporte especial o Ambulancias y requieren
            monitorización de signos vitales.
          </p>
        </div>
        <h4>Si quieres saber más o tiene alguna pregunta contáctanos</h4>
        <button>
          <a href="/#contacto">Contacto</a>
        </button>
      </div>
    </React.Fragment>
  );
};

export default Telemonitoreo;
