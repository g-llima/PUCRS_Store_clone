import React, { useState } from "react";

import "../Components/Styles/PagesCSS/Vestuario.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

function Vestuário() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
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

        <div className="vestuário__content__filtro">
          <button
            className="vestuário__content__filtro__btn"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            ORGANIZAR POR{" "}
            <i
              className={`fal fa-angle-down filterArrow ${
                isFilterOpen ? "filterArrowRot" : null
              }`}
            ></i>
          </button>
          <div
            class={`vestuário__content__filtro__dropdown ${
              isFilterOpen ? "filterOpen" : null
            }`}
          >
            <button className="vestuário__content__filtro__dropdown__item">
              Menor preço
            </button>
            <button className="vestuário__content__filtro__dropdown__item">
              Maior Preço
            </button>
            <button className="vestuário__content__filtro__dropdown__item">
              A-Z
            </button>
            <button className="vestuário__content__filtro__dropdown__item">
              Z-A
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Vestuário;
