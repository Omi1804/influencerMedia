import React from "react";
import CompanyPage from "../components/companyPage/CompanyPage";
import Navbar from "../components/navbar/Navbar";
import FooterMain from "../components/footermain/FooterMain";

const CompanySection = () => {
  return (
    <div>
      <Navbar />
      <CompanyPage />
      <FooterMain />
    </div>
  );
};

export default CompanySection;
