import React from "react";

import "../Components/Styles/PagesCSS/ProductPage.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

function capitalizeString(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
}

function ProductPage({ img1, type, name, price, code }) {
  return (
    <>
      <Navbar />
      <div className="productPage">
        <Nav
          navItems={[
            { nome: "Home", link: "/" },
            { nome: capitalizeString(type), link: `/${type}` },
            { nome: name, link: "#" },
          ]}
        />
        <div className="productPage__content">
          <div className="productPage__content__imgWrapper">
            <img
              className="productPage__content__imgWrapper__img"
              src={img1}
              alt="#"
            />
          </div>

          <div className="productPage__content__data">
            <h2 className="productPage__content__data__productName">{name}</h2>

            <p className="productPage__content__data__productCode">
              código: {code}
            </p>

            <div className="productPage__content__data__sizes">
              <span className="productPage__content__data__sizes__size">P</span>
              <span className="productPage__content__data__sizes__size">M</span>
              <span className="productPage__content__data__sizes__size">G</span>
              <span className="productPage__content__data__sizes__size">
                GG
              </span>
            </div>

            <div className="productPage__content__data__buy">
              <h1 className="productPage__content__data__buy__price">
                R$ {price}
              </h1>
              <button className="productPage__content__data__buy__btn">
                CONSULTAR ENTREGA
              </button>
            </div>

            <div className="productPage__content__data__description">
              <h4 className="productPage__content__data__description__topic">
                {type.toUpperCase()}
              </h4>
              <hr />
              <p className="productPage__content__data__description__discount">
                Professores e Técnicos Administrativos possuem 10%. Promoções e
                descontos não cumulativos.
              </p>
            </div>

            <div className="productPage__content__data__btns">
              <button className="productPage__content__data__btns__btn">
                PROMOÇÕES
              </button>
              <button className="productPage__content__data__btns__btn">
                CONDIÇÕES DE PAGAMENTO
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
