import React from "react";
import "./styles/index.scss";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Doctors from "./components/Doctors";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import BotonHero from "./components/BotonHero";
import Telemedicine from "./components/telemedicine";
export default function Home() {
  return (
    <React.Fragment>
      <TopHeader />
      <Header session={true} />
      <Hero />
      <Telemedicine />
      <BotonHero />
      <Cards />
      <Services />
      {/*

        <Doctors />
        <Banner />
      */}
      <Contact />
      <Footer />
    </React.Fragment>
  );
}
