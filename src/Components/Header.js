import React, { useState } from "react";
import "./Styles/Header.css";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const navItems = [
  {
    name: "VESTUÁRIO",
    to: "/vestuario",
  },
  {
    name: "BOLSAS E MOCHILAS",
    to: "/vestuario",
  },
  {
    name: "PAPELARIA",
    to: "/vestuario",
  },
  {
    name: "ACESSÓRIOS",
    to: "/vestuario",
  },
  {
    name: "ESPORTES",
    to: "/vestuario",
  },
  {
    name: "ESCOLAS E CURSOS",
    to: "/vestuario",
  },
  {
    name: "PROMOÇÕES",
    to: "/vestuario",
  },
];

function Header() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  window.addEventListener("load", () => setScreenWidth(window.innerWidth));
  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
    setIsNavOpen(false);
  });

  let navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar__content">
        {/* PUCRS STORE LOGO */}
        <div
          className="navbar__content__logo"
          onClick={() => setIsNavOpen(false)}
        >
          {/* LOGO TEXT */}
          <h1 className="navbar__content__logo__text">
            <Link to="/">
              PUCRS
              <br />
              STORE
            </Link>
          </h1>

          {/* LOGO "P" ICON */}
          <Link to="/">
            <svg
              className="navbar__content__logo__icon"
              viewBox="580 0 800 300"
            >
              <path
                fill="#fff"
                d="M789.76,55.51a73.48,73.48,0,0,0-20.44-27.07q-13.27-11-32.13-16.77T695.28,5.91H601.21a10.7,10.7,0,0,0-10.7,10.7V230a10.7,10.7,0,0,0,16.78,8.8l81.85-56.44a10.62,10.62,0,0,1,5.88-1.86A149.43,149.43,0,0,0,733.87,175a94.71,94.71,0,0,0,33.36-16.76,78,78,0,0,0,21.83-27.59q7.86-16.42,7.86-38.07v-.7Q796.92,71.57,789.76,55.51Zm-71.24,79.71a31.19,31.19,0,0,1-17.06,4.5l-40.61.27a6.44,6.44,0,0,1-5.73-9.47l14-26.29A31.28,31.28,0,0,1,686,46l40.6-.28a6.44,6.44,0,0,1,5.73,9.47l-14,26.29a31.29,31.29,0,0,1,.26,53.7Z"
              ></path>
            </svg>
          </Link>
        </div>

        {/* SEARCH INPUT */}
        <div className="navbar__content__search">
          <form
            className="navbar__content__search__form"
            onSubmit={() => navigate(`/buscar/s=${searchInput}`)}
          >
            <input
              className="navbar__content__search__form__input"
              type="text"
              value={searchInput}
              maxLength="20"
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="O que você deseja pesquisar?"
              required
            />
            <input
              className="navbar__content__search__form__submitBtn"
              type="Submit"
              placeholder="BUSCAR"
              defaultValue="BUSCAR"
            />

            {/* BOTTOM RIGHT SVG */}
            <svg
              width="61"
              height="72"
              xmlns="http://www.w3.org/2000/svg"
              className="navbar__content__search__svg"
            >
              <g>
                <path
                  stroke="null"
                  fill="#ffffff"
                  d="m-98.898015,120.5l-26.823,-18.5l-1183.572,0l-26.822,18.5a4.4,4.4 0 0 1 -6.9,-3.622l0,-56.878a10,10 0 0 1 10,-10l1231,0a10,10 0 0 1 10,10l0,12.2l0.015,-0.009l0,44.685a4.4,4.4 0 0 1 -4.413,4.408a4.348,4.348 0 0 1 -2.485,-0.784zm153,-50l-26.823,-18.5l-17.294,0a10,10 0 0 1 -10,-10l0,-32a10,10 0 0 1 10,-10l41,0a10,10 0 0 1 10,10l0,12.2l0.015,-0.01l0,44.686a4.4,4.4 0 0 1 -4.414,4.408a4.349,4.349 0 0 1 -2.484,-0.784z"
                />
              </g>
            </svg>
          </form>
        </div>

        {/* MOBILE NAV */}
        {screenWidth <= 768 && (
          <div
            className="navbar__content__mobileBTN"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <div
              className={`navbar__content__hamburguer ${
                isNavOpen ? "navOpenIcon" : null
              }`}
            ></div>
          </div>
        )}
      </div>

      {/* NAVBAR ITEMS */}
      <div className={`navbar__topics ${isNavOpen ? "openNav" : null}`}>
        <div className="navbar__topics__content">
          <ul className="navbar__topics__content__items">
            {/* NAVBAR ITEMS ITEM */}
            {navItems.map((item, index) => (
              <Link to={item.to} key={index}>
                <li
                  className="navbar__topics__content__items__item"
                  onClick={() => setIsNavOpen(false)}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
