import React from "react";
import "./brandOption.css";
import {
  dots,
  brandCustomize,
  brandHelp,
  brandSearch,
  brandSetting,
  Union,
} from "../../../export";

const BrandOptions = () => {
  return (
    <div className="brandOptions">
      <div className="brandsDotImg1">
        <img src={dots} alt="" />
      </div>
      <div className="brandsConnectingImg">
        <img src={Union} alt="" />
        <div className="brandSearch">
          <img src={brandSearch} alt="" />
        </div>

        <div className="brandCustomize">
          <img src={brandCustomize} alt="" />
        </div>
        <div className="brandSetting">
          <img src={brandSetting} alt="" />
        </div>
        <div className="brandHelp">
          <img src={brandHelp} alt="" />
        </div>
      </div>
      <div className="brandsDotImg2">
        <img src={dots} alt="" />
      </div>
    </div>
  );
};

export default BrandOptions;
