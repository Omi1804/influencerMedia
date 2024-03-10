import React from "react";
import "./influencerOptions.css";
import { option1, option2, option3, option4 } from "../../../export";

const InfluencerOptions = () => {
  return (
    <div className="influencerOption">
      <div className="influencerContent influencerOption1">
        <div>
          <img src={option1} alt="" />
          <p>DISCOVER BRANDS</p>
        </div>
      </div>
      <div className="influencerContent influencerOption2">
        <div>
          <img src={option2} alt="" />
          <p>CUSTOM CAMPAIGNS</p>
        </div>
      </div>
      <div className="influencerContent influencerOption3">
        <div>
          <p>ADVANCED FILTERS</p>
          <img src={option3} alt="" />
        </div>
      </div>
      <div className="influencerContent influencerOption4">
        <div>
          <p>REALTIME COLLABS</p>
          <img src={option4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InfluencerOptions;
