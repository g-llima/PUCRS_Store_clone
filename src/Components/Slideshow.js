import React from "react";
import "./Styles/Slideshow.css";
import { Slide } from "react-slideshow-image";

// SLIDESHOW SIDE ARROWS
const slideShowArrow = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 44">
    <path
      d="M27,22L27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22L27,22z"
      fill="#fff"
    />
  </svg>
);

// SLIDESHOW CONFIG
const properties = {
  prevArrow: (
    <div
      className="slideArrowB"
      style={{
        width: "30px",
        marginRight: "-30px",
        transform: "rotate(180deg)",
      }}
    >
      {slideShowArrow}
    </div>
  ),
  nextArrow: (
    <div className="slideArrowF" style={{ width: "30px", marginLeft: "-30px" }}>
      {slideShowArrow}
    </div>
  ),
};

function Slideshow({ slideImages }) {
  return (
    <div className="slideshow">
      <Slide
        {...properties}
        easing="ease"
        indicators={() => <div className="indicator"></div>}
      >
        {/* SLIDESHOW IMAGES SHOW */}
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
