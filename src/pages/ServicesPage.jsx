import React from "react";
import Navbar from "../components/navbar/Navbar";
import ServiceSelf from "../components/servicesPage/ServiceSelf";
import FooterMain from "../components/footermain/FooterMain";

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      <ServiceSelf />
      <FooterMain />
    </div>
  );
};

export default ServicesPage;
