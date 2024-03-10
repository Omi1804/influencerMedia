import React from "react";
import "./influencerHero.css";

const InfluencerHero = () => {
  return (
    <div className="influencerPageHero">
      <div className="balls">
        <div className="ball1"></div>
        <div className="ball2"></div>
        <div className="ball3"></div>
      </div>
      <div className="influencerPageHeading">
        <h1>Empowering lives </h1>
        <h2>One post at a time</h2>
      </div>
      <div className="influencerPageContent">
        <p>
          Our platform welcomes diverse talents and ensures everyone has a place
          to shine
        </p>
      </div>
      <div className="influencerPageButtons">
        <button>I am Influencer</button>
        <button>I am Brand</button>
      </div>
    </div>
  );
};

export default InfluencerHero;
