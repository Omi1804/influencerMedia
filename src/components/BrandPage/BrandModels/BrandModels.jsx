import React, { useEffect, useState } from "react";
import "./brandModels.css";
import {
  brandAdv1,
  brandAdv2,
  brandAdv3,
  brandAdv4,
  brandAdv5,
  brandAdv6,
  brandAdv7,
  brandAdv8,
  brandAdv9,
  brandAdv10,
  brandAdv11,
  brandAdv12,
  brandAdv13,
  brandAdv14,
  brandAdv15,
  brandAdv16,
  brandAdv17,
  brandAdv18,
  brandAdv19,
  midModel1,
  midModel2,
  midModel3,
  midModel4,
  midModel5,
} from "../../../export";

const BrandModels = () => {
  // const [loading, setLoading] = useState(true);

  const midImages = [midModel1, midModel2, midModel3, midModel4, midModel5];
  const firstSection = [
    brandAdv1,
    brandAdv2,
    brandAdv3,
    brandAdv4,
    brandAdv5,
    brandAdv6,
    brandAdv7,
    brandAdv8,
    brandAdv9,
  ];
  const LastSection = [
    brandAdv10,
    brandAdv11,
    brandAdv12,
    brandAdv13,
    brandAdv14,
    brandAdv15,
    brandAdv16,
    brandAdv17,
    brandAdv18,
    brandAdv19,
  ];

  const [firstImage, setFirstImage] = useState("");
  const [secondImage, setSecondImage] = useState("");
  const [thirdImage, setThirdImage] = useState("");
  const [fourthImage, setFourthImage] = useState("");
  const [midImage, setMidImage] = useState("");

  // Function to fetch random image from the provided list
  const getRandomImage = (images) => {
    return images[Math.floor(Math.random() * images.length)];
  };

  // Function to set random images for the grid on an interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFirstImage(getRandomImage(firstSection));
      setSecondImage(getRandomImage(LastSection));
      setThirdImage(getRandomImage(LastSection));
      setFourthImage(getRandomImage(firstSection));
      setMidImage(getRandomImage(midImages));
      // setLoading(true);
    }, 3000);

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Callback when an image is loaded
  // const handleImageLoad = () => {
  //   setLoading(false);
  // };

  return (
    <div className="brandModels">
      <div className="brandModel brandModel1">
        <div className="firstImgContainer">
          <img src={firstImage} alt="First Brand Model" />
          <div className="brandImgContent">
            <p>
              Influencer’s Share - <span>4 nano</span>
            </p>
            <p>
              Total Views - <span>1.2 M</span>
            </p>
            <p>
              Total Er% - <span>5.8%</span>
            </p>
            <p>
              Total Reach - <span>1.48 M</span>
            </p>
          </div>
        </div>
        <div className="secondImgContainer">
          <img src={secondImage} alt="Second Brand Model" />
          <div className="brandImgContent">
            <p>
              Influencer’s Share - <span>500 nano</span>
            </p>
            <p>
              Total Views - <span>2.8 M</span>
            </p>
            <p>
              Total Er% - <span>3.2%</span>
            </p>
            <p>
              Total Reach - <span>3.4 M</span>
            </p>
          </div>
        </div>
      </div>
      <div className="brandModel brandModel2">
        <div className="midImgContainer">
          <img src={midImage} alt="Middle Brand Model" />
          <div className="brandImgContent">
            <p>
              Influencer’s Share - <span>300 nano</span>
            </p>
            <p>
              Total Views - <span>1 M</span>
            </p>
            <p>
              Total Er% - <span>2.11%</span>
            </p>
            <p>
              Total Reach - <span>6 M</span>
            </p>
          </div>
        </div>
      </div>
      <div className="brandModel brandModel3">
        <div className="thirdImgContainer">
          <img src={thirdImage} alt="Third Brand Model" />
          <div className="brandImgContent">
            <p>
              Influencer’s Share - <span>200 nano</span>
            </p>
            <p>
              Total Views - <span>1 M</span>
            </p>
            <p>
              Total Er% - <span>3%</span>
            </p>
            <p>
              Total Reach - <span>2 M</span>
            </p>
          </div>
        </div>
        <div className="fourthImgContainer">
          <img src={fourthImage} alt="Fourth Brand Model" />
          <div className="brandImgContent">
            <p>
              Influencer’s Share - <span>200 nano</span>
            </p>
            <p>
              Total Views - <span>1 M</span>
            </p>
            <p>
              Total Er% - <span>3%</span>
            </p>
            <p>
              Total Reach - <span>2 M</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandModels;
