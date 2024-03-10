import React from "react";
import "./footerMain.css";
import {
  footerbrand,
  footerFacebook,
  footerInstagram,
  footerLkdn,
  footerTwitter,
  footerPhone,
  footerMail,
  footerAddress,
} from "../../export";

const FooterMain = () => {
  return (
    <div className="footerMain">
      <div className="section1">
        <img src={footerbrand} alt="" className="brandicon" />
        <p>Elevating Brands with Influencer Magic.</p>
        <div className="mainFooter_socialIcon">
          <img src={footerInstagram} alt="" />
          <img src={footerFacebook} alt="" />
          <img src={footerTwitter} alt="" />
          <img src={footerLkdn} alt="" />
        </div>
      </div>
      <div className="section2">
        <h3>Quick Link</h3>
        <ul className="footerLists">
          <li className="footerLinks">Home</li>
          <li className="footerLinks">About Us</li>
          <li className="footerLinks">Our Services</li>
          <li className="footerLinks">Influencer</li>
          <li className="footerLinks">Brand</li>
          <li className="footerLinks">Case Studies</li>
          <li className="footerLinks">Blogs</li>
          <li className="footerLinks">Careers</li>
        </ul>
      </div>
      <div className="section3">
        <h3>Reach us</h3>
        <p className="footer_phone">
          <img src={footerPhone} alt="" />
          <span>+91-0000000000</span>
        </p>
        <p className="footer_email">
          <img src={footerMail} alt="" />
          <span>admin@snackmedia.io</span>
        </p>
        <p className="footer_address">
          <img src={footerAddress} alt="" />
          <span>F-41-B, Laxmi Nagar, Delhi-110092</span>
        </p>
      </div>
      <div className="allRightsStripe">All Rights preserved 2023</div>
    </div>
  );
};

export default FooterMain;
