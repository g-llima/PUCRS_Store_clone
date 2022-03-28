import React from "react";

import Slideshow from "../Components/Slideshow";
import Lines from "../Components/Lines";
import News from "../Components/News";

// IMGS TO BE SHOW
const slideShowImages = [
  "/Imgs/slideshow/img1.webp",
  "/Imgs/slideshow/img2.webp",
  "/Imgs/slideshow/img3.jpg",
  "/Imgs/slideshow/img4.jpg",
];

function HomePage() {
  return (
    <>
      <Slideshow slideImages={slideShowImages} />
      <Lines />
      <News />
    </>
  );
}

export default HomePage;
