import React from "react";
import "./companyPage.css";

import {
  footerbrand,
  footerFacebook,
  footerInstagram,
  footerLkdn,
  footerTwitter,
  footerPhone,
  footerMail,
  footerAddress,
  companyArt,
} from "../../export";

const CompanyPage = () => {
  return (
    <div className="companyPage">
      <div className="companyHeroImg">
        <img src={companyArt} alt="" />
      </div>
      <div className="companyPageContent">
        <p className="greet">We’d love to hear from</p>
        <div className="companyline">You</div>
        <p>Reach us</p>
        <p className="company_phone">
          <img src={footerPhone} alt="" />
          <span>+91-0000000000</span>
          <img src={footerFacebook} alt="" className="companySocialIcon" />
        </p>
        <p className="company_email">
          <img src={footerMail} alt="" />
          <span>admin@snackmedia.io</span>
          <img src={footerInstagram} alt="" className="companySocialIcon" />
        </p>
        <p className="company_address">
          <img src={footerAddress} alt="" />
          <span>F-41-B, Laxmi Nagar, Delhi-110092</span>
          <img src={footerTwitter} alt="" className="companySocialIcon" />
        </p>
      </div>
    </div>
  );
};

export default CompanyPage;
