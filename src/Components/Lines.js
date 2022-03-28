import React from "react";
import "./Styles/Lines.css";
import { Slide } from "react-slideshow-image";

import Banner from "./Banner.jsx";
import Card_Type from "./Card_Type.jsx";

const cards = [
  {
    name: "PAPELARIA",
    icon: "papelaria.webp",
    to: "/",
  },
  {
    name: "ESCOLAS E CURSOS",
    icon: "escolas_cursos.webp",
    to: "/",
  },
  {
    name: "COLEÇÕES",
    icon: "colecoes.webp",
    to: "/",
  },
  {
    name: "ECO",
    icon: "ecossustentável.webp",
    to: "/",
  },
  {
    name: "VIDA NO CAMPUS",
    icon: "vida_no_campus.webp",
    to: "/",
  },
  {
    name: "SOU PUCRS",
    icon: "sou_pucrs.webp",
    to: "/",
  },
  {
    name: "ESPORTE E SAÚDE",
    icon: "esporte_saude.webp",
    to: "/",
  },
];

const properties = {
  duration: 3000,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
        indicators: false,
        arrows: false,
        canSwipe: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
      },
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
      },
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      },
    },
  ],
};

// HOMEPAGE LINES CARDS
function Lines() {
  return (
    <div className="lines">
      <Banner text="LINHAS" />
      <Slide {...properties} className="lines__items">
        {/* LINES CARDS ITEMS */}
        {cards.map((item, index) => (
          <Card_Type
            key={index}
            name={item.name}
            icon={item.icon}
            redirectUrl={item.to}
          />
        ))}
      </Slide>
    </div>
  );
}

export default Lines;
