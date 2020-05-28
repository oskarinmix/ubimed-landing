import React from "react";
import Head from "next/head";
import "./styles/index.scss";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Doctors from "./components/Doctors";
import Telemedicine2 from "./components/telemedicine2";

export default function Home() {
  return (
    <React.Fragment>
      <TopHeader />
      <Header session={true} />
      <Telemedicine2 />
      <Footer/>
     </React.Fragment>
  );
}
