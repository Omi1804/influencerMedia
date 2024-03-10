import React, { useState } from "react";
import { videoFile, videoPlaceholder } from "../../export";
import "./video.css";

const Video = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="video_section" id="influencers">
      <div className="video_sec">
        <div className="video">
          {videoLoaded ? null : (
            <img
              src={videoPlaceholder}
              alt="Video Placeholder"
              className="image"
            />
          )}
          <video
            src={videoFile}
            autoPlay
            loop
            muted
            onLoadedData={handleVideoLoaded}
            style={{ display: videoLoaded ? "block" : "none" }}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Video;
