import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact-section" id="contacto">
        <div className="form">
          <form>
            <h1>Contacto:</h1>
            <h2>Obtén atención prioritaria y personalizada.</h2>
            <p>
              Resolvemos tus dudas, damos guías personalizadas y demostraciones
              de uso
            </p>
            <input type="text" placeholder="Correo Electrónico" />
            <input type="text" placeholder="Teléfono de Contacto" />
            <textarea
              type="text"
              placeholder="Escriba su Mensaje"
              style={{ resize: "none" }}
            />
            <button type="button">Enviar Mensaje</button>
          </form>
        </div>
        <div className="img">
          <img src="/img/medical-563427_1920.png" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
