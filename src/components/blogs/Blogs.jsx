import React from "react";
import "./blogs.css";
import {
  blog1,
  blog2,
  blog3,
  footerImg,
  footerInsta,
  footerLdn,
} from "../../export";

const Blogs = () => {
  return (
    <div className="combine_cont" id="company">
      <div className="blogs_section">
        <div className="blog_headings">
          <h1>Our Blogs</h1>
          <p>“Content is anything that adds value to the reader’s life”</p>
        </div>
        <div className="blog_slots">
          <div className="blog1">
            <img src={blog1} alt="" />
            <p>Instagram Reels Not Getting Views? Here Is How To Fix It</p>
            <span>July 5, 2023</span>
          </div>
          <div className="blog2">
            <img src={blog2} alt="" />
            <p>The Story About The Rise Of Youtuber HJ Evelyn.</p>
            <span>July 1, 2023</span>
          </div>
          <div className="blog3">
            <img src={blog3} alt="" />
            <p>How Influencers Seize The Means Of Production?</p>
            <span>Apr 4, 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
