import React from "react";
import { footerImg, footerLdn, footerInsta, arrow } from "../../export.js";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content">
        <h3>Our team is</h3>
        <p>At Noida Sec 15</p>

        <h3>Drop us a line</h3>
        <p>hr@snackmedia.io</p>

        <h3>Connect with us</h3>
        <img src={footerLdn} alt="" />
        <img src={footerInsta} alt="" />
        <button className="footer_button">
          BECOME A CLIENT <img src={arrow} alt="" />
        </button>
        <div className="stripe">
          <span>© 2023       </span>
          <span className="company_name">SNACKMEDIA — Agency</span>
        </div>
      </div>

      <div className="footer_image">
        <img src={footerImg} alt="" />
      </div>
    </div>
  );
};

export default Footer;
