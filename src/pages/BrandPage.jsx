import React from "react";
import FooterMain from "../components/footermain/FooterMain";
import Navbar from "../components/navbar/Navbar";
import HeroPage from "../components/BrandPage/HeroPage/HeroPage";
import BrandOptions from "../components/BrandPage/options/BrandOptions";
import BrandCompanies from "../components/BrandPage/companies/BrandCompanies";
import BrandModels from "../components/BrandPage/BrandModels/BrandModels";

const BrandPage = () => {
  return (
    <div className="brandPage">
      <Navbar />
      <section>
        <HeroPage />
      </section>
      <section>
        <BrandOptions />
      </section>
      <section>
        <BrandModels />
      </section>
      <section>
        <BrandCompanies />
      </section>
      <section>
        <FooterMain />
      </section>
    </div>
  );
};

export default BrandPage;
