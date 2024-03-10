import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import {
  homeLogo,
  homeInstagram,
  homeLinkdin,
  homeWhatsApp,
} from "./../../export";

import Navbar from "../navbar/Navbar";

const Home = () => {
  const [heroHeading, setHeroHeading] = useState("Influencer");

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroHeading((prev) =>
        prev === "Influencer" ? "Groove" : "Influencer"
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="div1">
        <div className="logo">
          <img src={homeLogo} alt="" />
        </div>
        <div className="homeHeroHeadings">
          <div className="block"></div>
          <h1 className="hero_line-1" id="hero_line-1">
            {heroHeading}
          </h1>
          <h1 className="hero_line-2">
            Brands on T<span>he Move</span>
          </h1>
        </div>
        <div className="social_icons">
          <img src={homeInstagram} alt="" />
          <img src={homeLinkdin} alt="" />
          <img src={homeWhatsApp} alt="" />
        </div>
      </div>
      <div className="div2">
        <div className="navbar_section"></div>
        <div className="ball_section">
          <div className="ball"></div>
          <div className="blur_section">
            <div className="blur"></div>
            <div className="blur"></div>
            <div className="blur"></div>
            <div className="blur"></div>
            <div className="blur"></div>
            <div className="blur"></div>
            <div className="blur"></div>
            <div className="blur"></div>
            <div className="blur"></div>
            <div className="blur"></div>
            <div className="blur"></div>
          </div>
        </div>
        <div className="grey_section">
          <div className="ball_shadow"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
