import React, { useState, useEffect } from "react";
import "./collection.css";
import {
  model1,
  model2,
  model3,
  model4,
  model5,
  model6,
  model7,
  model8,
  model9,
  model10,
  model11,
  model12,
  model13,
  model14,
  model15,
  model16,
  model17,
  model18,
  model19,
  model20,
  model21,
  model22,
  model23,
  model24,
  model25,
  model26,
  model27,
  model28,
  model29,
  model30,
} from "../../../export";

const InfluencerCollection = () => {
  const [models, setModels] = useState([
    model1,
    model2,
    model3,
    model4,
    model5,
    model6,
    model7,
    model8,
    model9,
    model10,
    model11,
    model12,
    model13,
    model14,
    model15,
    model16,
    model17,
    model18,
    model19,
    model20,
    model21,
    model22,
    model23,
    model24,
    model25,
    model26,
    model27,
    model28,
    model29,
    model30,
  ]);

  const [animation, setAnimation] = useState("fadeIn");

  useEffect(() => {
    const shuffle = (array) => {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    };

    const interval = setInterval(() => {
      setAnimation("fadeOut");

      setModels(shuffle([...models]));
      setAnimation("fadeIn");
    }, 2000); // changes every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [models]);

  return (
    <div className="influencerCollections">
      {Array.from({ length: 6 }, (_, i) => (
        <div className={`gridCollection grid${i + 1}`} key={i}>
          <img
            src={models[i * 2]}
            alt=""
            onLoad={(e) => e.target.classList.add("loaded")}
          />
          <img
            src={models[i * 2 + 1]}
            alt=""
            onLoad={(e) => e.target.classList.add("loaded")}
          />
        </div>
      ))}
    </div>
  );
};

export default InfluencerCollection;
