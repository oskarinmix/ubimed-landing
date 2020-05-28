import React from "react";

const Services = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const list = document.querySelectorAll(".services .nav ul li");
    const content = document.querySelectorAll(".inner-content");
    list.forEach((element) => {
      element.style.backgroundColor = "#41e296";
    });
    content.forEach((element) => {
      element.classList.add("hidden");
    });
    list[index].style.backgroundColor = "#10323b";
    content[index].classList.remove("hidden");
  }, [index]);
  return (
    <React.Fragment>
      <div className="services" id="consultoria">
        <div className="nav">
          <ul>
            <li onClick={() => setIndex(0)}>Consultoría</li>
            {/*<li onClick={() => setIndex(1)}>Asesoría</li>
            <li onClick={() => setIndex(2)}>Telemonitoreo</li>
            <li onClick={() => setIndex(3)}>Telemedicina</li>*/}
          </ul>
        </div>
        <div className="content">
          <div className="inner-content">
            <h1>Consultoría</h1>
            <p>
              Más de 10 años de experiencia en el diseño y la implementación de
              modelos diferenciales de atención en salud basadas en Tic en
              Colombia y Latinoamérica, nos dan la confianza para poner a tu
              disposición nuestra tecnología para la consultoría y asesoría en
              el levantamiento y desarrollo de modelos a la medida teniendo en
              cuenta la necesidad del sector y de nuestros clientes.<br></br>
              <br></br> Si quieres saber más o tiene alguna pregunta
              <a
                href="https://api.whatsapp.com/send?phone=573128772788&text=Hola!+¡Quiero+conocer+más+acerca+de+Ubimed!."
                target="_blank"
              >
                Contáctanos
              </a>
            </p>
            <img src="/img/ff94e221a48e008963df083babb4fb2d.png" />
          </div>
          {/*
          <div className="inner-content hidden">
            <h1>Asesoría</h1>
            <p>
              Más de 10 años de experiencia en el diseño y la implementación de
              modelos diferenciales de atención en salud basadas en Tic en
              Colombia y Latinoamérica, nos dan la confianza para poner a tu
              disposición nuestra tecnología para la consultoría y asesoría en
              el levantamiento y desarrollo de modelos a la medida teniendo en
              cuenta la necesidad del sector y de nuestros clientes.<br></br>
              <br></br> Si quieres saber más o tiene alguna pregunta
              <a
                href="https://api.whatsapp.com/send?phone=573128772788&text=Hola!+¡Quiero+conocer+más+acerca+de+Ubimed!."
                target="_blank"
              >
                Contáctanos
              </a>
            </p>
            <img src="/img/ff94e221a48e008963df083babb4fb2d.png" />
          </div>
          <div className="inner-content hidden">
            <h1>Telemonitoreo</h1>
            <p>
              Con la tecnología Ubimed pacientes y proveedores de servicios de
              salud ahora podrán obtener la mejor experiencia en la atención
              Domiciliaria a través de la Monitorización permanente de sus
              variables clínicas.<br></br>
              <br></br> Si quieres saber más o tiene alguna pregunta
              <a
                href="https://api.whatsapp.com/send?phone=573128772788&text=Hola!+¡Quiero+conocer+más+acerca+de+Ubimed!."
                target="_blank"
              >
                Contáctanos
              </a>
            </p>
            <img src="/img/ff94e221a48e008963df083babb4fb2d.png" />
          </div>
          <div className="inner-content hidden">
            <h1>Telemedicina</h1>
            <p>
              Ubimed Ips presta los servicios en modalidad de telemedicina
              interactiva a través de la Videoconsulta en tiempo real y no
              interactiva a través de la teleconsulta, chat médico en tiempo
              diferido.<br></br>
              <br></br> Si quieres saber más o tiene alguna pregunta
              <a
                href="https://api.whatsapp.com/send?phone=573128772788&text=Hola!+¡Quiero+conocer+más+acerca+de+Ubimed!."
                target="_blank"
              >
                Contáctanos
              </a>
            </p>
            <img src="/img/ff94e221a48e008963df083babb4fb2d.png" />
          </div>*/}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Services;
