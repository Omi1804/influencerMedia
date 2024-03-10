import React, { useEffect } from "react";
import "./brandCompanies.css";
import {
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
  brand11,
  brand12,
  brand13,
  brand14,
  brand15,
  brand16,
  brand17,
  brand18,
  brand19,
} from "../../../export";

const BrandCompanies = () => {
  return (
    <div className="brandCompanies">
      <div className="brandHeadSpinner">
        <div></div>
        <p>Our Clients</p>
      </div>
      <div className="brandPageImages">
        <img src={brand1} alt="" className="img1 img" />
        <img src={brand2} alt="" className="img2 img" />
        <img src={brand3} alt="" className="img3 img" />
        <img src={brand4} alt="" className="img4 img" />
        <img src={brand5} alt="" className="img5 img" />
        <img src={brand6} alt="" className="img6 img" />
        <img src={brand7} alt="" className="img7 img" />
        <img src={brand8} alt="" className="img8 img" />
        <img src={brand9} alt="" className="img9 img" />
        <img src={brand10} alt="" className="img10 img" />
        <img src={brand11} alt="" className="img11 img" />
        <img src={brand12} alt="" className="img12 img" />
        <img src={brand13} alt="" className="img13 img" />
        <img src={brand14} alt="" className="img14 img" />
        <img src={brand15} alt="" className="img15 img" />
        <img src={brand16} alt="" className="img16 img" />
        <img src={brand17} alt="" className="img17 img" />
        <img src={brand18} alt="" className="img18 img" />
        <img src={brand19} alt="" className="img19 img" />
      </div>
    </div>
  );
};

export default BrandCompanies;
