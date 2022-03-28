import React, { useState, useContext, useEffect } from "react";

import "../Components/Styles/PagesCSS/Vestuario.css";
import { ProductContext } from "../ProductContext";
import Nav from "../Components/Nav";
import CardProduct from "../Components/Card_Product";

function removeSpecial(str) {
  str = str.replace("ã", "a");
  str = str.replace("ç", "c");
  str = str.replace(/[^a-zA-Z ]/g, "");
  str = str.replace(/\s/g, "-");
  return str;
}
function convertPrice(value) {
  value = value.toString();
  return (
    value.substring(0, value.length - 2) +
    "," +
    value.substring(value.length - 2)
  );
}
function Vestuário() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(1);

  const { contextValue } = useContext(ProductContext);

  let tempProducts = [];
  useEffect(() => {
    contextValue.map((item) => {
      if (item.type == "vestuario") {
        tempProducts.push(item);
      }
    });
    setProducts(tempProducts);
  }, [contextValue]);

  return (
    <div className="vestuário">
      <div className="vestuário__content">
        {/* MIDDLE TOP BANNER */}
        <img
          src="/Imgs/vestuario/banner_vestuario.webp"
          alt="VESTUÁRIO"
          className="vestuário__content__banner"
        />

        {/* NAVIGATION */}
        <Nav
          navItems={[
            { nome: "Home", link: "/" },
            { nome: "Vestuário", link: "/vestuario" },
          ]}
        />

        {/* FILTER PRODUCTS */}
        <div className="vestuário__content__filtro">
          {/* FILTER BUTTON */}
          <button
            className="vestuário__content__filtro__btn"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            ORGANIZAR POR
          </button>

          {/* FILTER ITEMS */}
          <div
            className={`vestuário__content__filtro__dropdown ${
              isFilterOpen ? "filterOpen" : null
            }`}
          >
            {/* - PRICE */}
            <button
              className={`vestuário__content__filtro__dropdown__item 
              ${selected == 0 ? "filterSelected" : null}`}
              onClick={() => {
                setProducts([
                  ...products.sort((a, b) => (a.price >= b.price ? 1 : -1)),
                ]);
                setSelected(0);
              }}
            >
              Menor preço
            </button>

            {/* + PRICE */}
            <button
              className={`vestuário__content__filtro__dropdown__item ${
                selected == 1 ? "filterSelected" : null
              }`}
              onClick={() => {
                setProducts([
                  ...products.sort((a, b) => (a.price <= b.price ? 1 : -1)),
                ]);
                setSelected(1);
              }}
            >
              Maior Preço
            </button>

            {/* A-Z */}
            <button
              className={`vestuário__content__filtro__dropdown__item ${
                selected == 2 ? "filterSelected" : null
              }`}
              onClick={() => {
                setProducts([
                  ...products.sort((a, b) => (a.name >= b.name ? 1 : -1)),
                ]);
                setSelected(2);
              }}
            >
              A-Z
            </button>

            {/* Z-A */}
            <button
              className={`vestuário__content__filtro__dropdown__item ${
                selected == 3 ? "filterSelected" : null
              }`}
              onClick={() => {
                setProducts([
                  ...products.sort((a, b) => (a.name <= b.name ? 1 : -1)),
                ]);
                setSelected(3);
              }}
            >
              Z-A
            </button>
          </div>
        </div>

        {/* DISPLAY PRODUCTS */}
        <div className="vestuário__content__products">
          {products.map((item, index) => (
            <CardProduct
              key={index}
              cardLink={`/${removeSpecial(item.name)}`}
              nome={item.name}
              preço={convertPrice(item.price)}
              imgLink={item.img1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vestuário;
