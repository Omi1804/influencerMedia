import React from "react";
import Navbar from "../components/navbar/Navbar";
import FooterMain from "../components/footermain/FooterMain";
import InfluencerHero from "../components/InfluencerPage/HeroPage/InfluencerHero";
import InfluencerOptions from "../components/InfluencerPage/options/InfluencerOptions";
import InfluencerCollection from "../components/InfluencerPage/InfluencerCollection/InfluencerCollection";
import InfluencerSteps from "../components/InfluencerPage/stepPage/InfluencerSteps";

const InfluencerPage = () => {
  return (
    <div className="influencerPage">
      <Navbar />
      <section>
        <InfluencerHero />
      </section>
      <section>
        <InfluencerOptions />
      </section>
      <section>
        <InfluencerCollection />
      </section>
      <section>
        <InfluencerSteps />
      </section>
      <section>
        <FooterMain />
      </section>
    </div>
  );
};

export default InfluencerPage;
