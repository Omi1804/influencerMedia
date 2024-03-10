import React from "react";
import "./heroPage.css";
import { brandHeroImg } from "../../../export";

const HeroPage = () => {
  return (
    <div className="brandHeroPage">
      <div className="whiteStripe"></div>
      <div className="brandHeroContent">
        <h1>Influencer Built To Perfection</h1>
        <div className="brandHeroImgCont">
          <img src={brandHeroImg} alt="" className="brandHeroImg" />
        </div>
        <p>Empowering Brands through Authentic Connections</p>
      </div>
    </div>
  );
};

export default HeroPage;
