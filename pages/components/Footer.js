import React from "react";
import TopHeader from "./TopHeader";
import Header from "./Header";

const Footer = () => {
  const [year, setYear] = React.useState("");
  React.useEffect(() => {
    const date = new Date().getFullYear();
    setYear(date);
  }, []);
  return (
    <React.Fragment>
      <footer>
        <h1>Ubimed para el mundo!</h1>
        <h1>Todos los derechos reservados {year}</h1>
      </footer>
      <TopHeader />
      <Header id="header-dark" session={false} />
    </React.Fragment>
  );
};

export default Footer;
