import React, { useState, useEffect } from "react";
import "./navbar.css";
import { homeLogo } from "../../export";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [style, setStyle] = useState({});

  useEffect(() => {
    setActiveLink(location.pathname);

    if (activeLink === "/services") {
      setStyle({
        filter: "invert(1)",
      });
    } else {
      setStyle({});
    }
  }, [location]);

  console.log(activeLink);

  return (
    <div className="navbar">
      <div className="navbar_logo">
        <Link to="/">
          <img src={homeLogo} alt="Snackmedia Site Icon" style={style} />
        </Link>
      </div>
      <ul className="navbar_navlist">
        <li className="navbar_navlinks">
          <Link to="/" className={`${activeLink === "/" ? "active" : ""}`}>
            Home
          </Link>
        </li>
        <li className="navbar_navlinks">
          <Link
            to="/influencer"
            className={`${activeLink === "/influencer" ? "active" : ""}`}
          >
            Influencer
          </Link>
        </li>
        <li className="navbar_navlinks">
          <Link
            to="/brand"
            className={`${activeLink === "/brand" ? "active" : ""}`}
          >
            Brands
          </Link>
        </li>
        <li className="navbar_navlinks">
          <Link
            to="/services"
            className={`${activeLink === "/services" ? "active" : ""}`}
          >
            Services
          </Link>
        </li>
        <li className="navbar_navlinks">
          <Link
            to="/company"
            className={`${activeLink === "/company" ? "active" : ""}`}
          >
            Company
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
