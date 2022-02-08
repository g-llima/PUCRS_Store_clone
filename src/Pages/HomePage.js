import React from "react";

import Navbar from "../Components/Navbar";
import Slideshow from "../Components/Slideshow";
import Lines from "../Components/Lines";
import News from "../Components/News";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Slideshow />
      <Lines />
      <News />
      <Footer />
    </>
  );
}

export default HomePage;
