import React from "react";

import "../Components/Styles/PagesCSS/Vestuario.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

function Vestuário() {
  return (
    <div className="vestuário">
      <Navbar />
      <div className="vestuário__content">
        <img
          src="/Imgs/vestuario/banner_vestuario.webp"
          alt="VESTUÁRIO"
          className="vestuário__content__banner"
        />
        <Nav
          navItems={[
            { nome: "Home", link: "/" },
            { nome: "Vestuário", link: "/vestuario" },
          ]}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Vestuário;
