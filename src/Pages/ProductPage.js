import React from "react";

import "../Components/Styles/PagesCSS/ProductPage.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

function ProductPage() {
  return (
    <>
      <Navbar />
      <div className="productPage">
        <Nav
          navItems={[
            { nome: "Home", link: "/" },
            { nome: "Vestuário", link: "/Vestuario" },
            { nome: "Camiseta PUCRS", link: "#" },
          ]}
        />
        <div className="productPage__content">
          <div className="productPage__content__imgWrapper">
            <img
              className="productPage__content__imgWrapper__img"
              src="http://placehold.jp/500x500.png"
              alt="#"
            />
          </div>

          <div className="productPage__content__data">
            <h2 className="productPage__content__data__productName">
              Camiseta PUCRS
            </h2>

            <p className="productPage__content__data__productCode">
              código: 1700
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
                R$ 42,00
              </h1>
              <button className="productPage__content__data__buy__btn">
                CONSULTAR ENTREGA
              </button>
            </div>

            <div className="productPage__content__data__description">
              <h4 className="productPage__content__data__description__topic">
                VESTUÁRIO
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
