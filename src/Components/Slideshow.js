import React from "react";
import "./Styles/Slideshow.css";
import { Slide } from "react-slideshow-image";

const slideImages = [
  "/Imgs/img1.webp",
  "/Imgs/img2.webp",
  "/Imgs/img3.jpg",
  "/Imgs/img4.jpg",
];

function Slideshow() {
  return (
    <div className="slideshow">
      <Slide easing="ease" indicators={() => <div className="indicator"></div>}>
        {slideImages.map((value, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${value})` }}></div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Slideshow;
