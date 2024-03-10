import React from "react";
import "./services.css";
import { Link } from "react-router-dom";

import {
  arrow,
  poster1,
  poster2,
  poster3,
  poster4,
  poster5,
  poster6,
  poster7,
  poster8,
  poster9,
} from "../../export";

const Services = () => {
  return (
    <div className="services">
      <div className="headings">
        <h1>Our Services</h1>
        <p>The best way to market yourself</p>
      </div>

      <div className="posters">
        <div className="blogs poster-1">
          <div className="content">
            <div className="homeContentHeading">
              <h2>INFLUENCER CAMPAIGNS</h2>
              <div className="arrow">
                <img src={arrow} alt="" />
              </div>
            </div>

            <p>
              Influencer campaigns and management are where we truly shine,be it
              Youtube, Instagram, Twitter, Snapchat, TikTok, Facebook, WhatsApp,
              or LinkedIn.
            </p>
            <Link to="/form">
              <button>Connect Now</button>
            </Link>
          </div>
          <img src={poster1} alt="" />
        </div>
        <div className="blogs poster-2 ">
          <img src={poster2} alt="" />
          <div className="content">
            <div className="homeContentHeading">
              <h2>CELEB ENDORSEMENT & PRODUCTION SHOOT </h2>
              <div className="arrow">
                <img src={arrow} alt="" />
              </div>
            </div>
            <p>
              When discussing celeb endorsements, the phrase "resonating" has
              the strongest emphasis. We will handle ideation and scripting to
              make sure your message is well-heard and resonates with the
              audience.
            </p>
            <Link to="/form">
              <button>Connect Now</button>
            </Link>
          </div>
        </div>
        <div className="blogs poster-3">
          <div className="content">
            <div className="homeContentHeading">
              <h2>CAMPAIGN STRATEGY </h2>
              <div className="arrow">
                <img src={arrow} alt="" />
              </div>
            </div>
            <p>
              We listen to your goals, blend in our expertise, and together, we
              create a mouthwatering strategy that will make your brand the talk
              of the town.
            </p>
            <Link to="/form">
              <button>Connect Now</button>
            </Link>
          </div>
          <img src={poster3} alt="" />
        </div>
        <div className="blogs poster-4">
          <img src={poster4} alt="" />
          <div className="content">
            <div className="homeContentHeading">
              <h2>PR GIFTING AND BRANDING</h2>
              <div className="arrow">
                <img src={arrow} alt="" />
              </div>
            </div>

            <p>
              We've mastered the art of the perfect gift – a carefully curated
              package that makes influencers and media go "wow!" We'll help you
              create an irresistible brand identity that stands out in a sea of
              competitors.
            </p>
            <Link to="/form">
              <button>Connect Now</button>
            </Link>
          </div>
        </div>
        <div className="blogs poster-5">
          <div className="content">
            <div className="homeContentHeading">
              <h2>REVIEWS AND RATINGS</h2>
              <div className="arrow">
                <img src={arrow} alt="" />
              </div>
            </div>
            <p>
              Looking to turn browsers into buyers with ecommerce reviews and
              ratings that pack a punch? We work our influencer wizardry to
              boost your ecommerce presence and turn skeptics into loyal
              customers.
            </p>
            <Link to="/form">
              <button>Connect Now</button>
            </Link>
          </div>
          <img src={poster5} alt="" />
        </div>
        <div className="blogs poster-6">
          <img src={poster6} alt="" />
          <div className="content">
            <div className="homeContentHeading">
              <h2>EVENTS AND LAUNCHES</h2>
              <div className="arrow">
                <img src={arrow} alt="" />
              </div>
            </div>
            <p>
              We understand the crucial role that strategic planning and
              influencer collaborations play in creating unforgettable
              experiences. From concept to execution, we specialise in crafting
              immersive events that captivate your audience and generate
              significant buzz.
            </p>
            <Link to="/form">
              <button>Connect Now</button>
            </Link>
          </div>
        </div>
        <div className="blogs poster-9">
          <div className="content">
            <div className="homeContentHeading">
              <h2>INFLUENCER MANAGEMENT</h2>
              <div className="arrow">
                <img src={arrow} alt="" />
              </div>
            </div>
            <p>
              We go beyond connecting influencers with brands. As their ultimate
              backstage managers, we work closely with handpicked influencers to
              cultivate their personal brand and elevate their success.
            </p>
            <Link to="/form">
              <button>Connect Now</button>
            </Link>
          </div>
          <img src={poster9} alt="" />
        </div>
        <div className="blogs poster-8">
          <img src={poster8} alt="" />
          <div className="content">
            <div className="homeContentHeading">
              <h2>SOCIAL MEDIA HANDLING</h2>
              <div className="arrow">
                <img src={arrow} alt="" />
              </div>
            </div>
            <p>
              From mouthwatering visuals to engaging captions, we'll craft a
              social media presence that makes your brand the talk of the town.
              It's like having a personal chef for your online presence.
            </p>
            <Link to="/form">
              <button>Connect Now</button>
            </Link>
          </div>
        </div>
        <div className="blogs poster-7">
          <div className="content">
            <div className="homeContentHeading">
              <h2>CONTENT AMPLIFICATION</h2>
              <div className="arrow">
                <img src={arrow} alt="" />
              </div>
            </div>
            <p>
              Hungry for content amplification that sets social media on fire?
              We've got you covered. We amplify your brand's voice, ensuring it
              reaches the right audience and resonates like the crunch of a
              perfectly timed snack.
            </p>
            <Link to="/form">
              <button>Connect Now</button>
            </Link>
          </div>
          <img src={poster7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
