import React from "react";
import Home from "../components/home/Home";
import Brand from "../components/brands/Brand";
import Services from "../components/services/Services";
import Scroll from "../components/scroll/Scroll";
import Video from "../components/video/Video";
import Blogs from "../components/blogs/Blogs";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  return (
    <main className="main">
      <Home />

      <Video />

      <Scroll />

      <Brand />

      <Services />

      <Blogs />

      <Footer />
    </main>
  );
};

export default HomePage;
