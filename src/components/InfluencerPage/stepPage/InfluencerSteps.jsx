import React from "react";
import "./steps.css";
import { redStep, blueStep, greenStep, yellowStep } from "../../../export";

const InfluencerSteps = () => {
  return (
    <div className="influencerSteps">
      <div className="stepOverContent">
        <h2>Spreading positivity and inspiring change</h2>
        <p>
          The power to inspire lies within you, and together, we can create a
          world of endless possibilities
        </p>
      </div>
      <div className="steps">
        <div className="step1">
          <div className="stepContent step1Content">
            <img src={yellowStep} alt="" />
            <button>Step 1</button>
            <p>
              Select your budget, required range of followers, age and medium
            </p>
          </div>
        </div>
        <div className="step2">
          <div className="stepContent step2Content">
            <img src={blueStep} alt="" />
            <p>Choose your blogger / brand lying in the range.</p>
            <button>Step 2</button>
          </div>
        </div>
        <div className="step3">
          <div className="stepContent step3Content">
            <img src={greenStep} alt="" />
            <button>Step 3</button>
            <p>Connect and chat with them.</p>
          </div>
        </div>
        <div className="step4">
          <div className="stepContent step4Content">
            <img src={redStep} alt="" />
            <p>Collaborate and make magic happen!</p>
            <button>Step 4</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerSteps;
