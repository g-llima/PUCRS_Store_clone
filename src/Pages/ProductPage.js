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
            <img src="http://placehold.jp/500x500.png" alt="#" />
          </div>

          <div className="productPage__content__data">
            <h2 className="productPage__content__data__productName">
              Camiseta PUCRS
            </h2>

            <p className="productPage__content__data__productCode">
              código: 1700
            </p>

            <div className="productPage__content__data__sizes">
              <span>P</span>
              <span>M</span>
              <span>G</span>
              <span>GG</span>
            </div>

            <div className="productPage__content__data__price">
              <h1>R$ 42,00</h1>
              <button>CONSULTAR ENTREGA</button>
            </div>

            <div className="productPage__content__data__description">
              <h4>VESTUÁRIO</h4>
              <hr />
              <p>
                Professores e Técnicos Administrativos possuem 10%. Promoções e
                descontos não cumulativos.
              </p>
            </div>

            <div className="productPage__content__data__btns">
              <button>PROMOÇÕES</button>
              <button>CONDIÇÕES DE PAGAMENTO</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
