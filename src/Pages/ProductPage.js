import React, { useState } from "react";

import "../Components/Styles/PagesCSS/ProductPage.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

function capitalizeString(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
}
const formQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20];

function ProductPage({ img1, type, name, price, code }) {
  const [isOpenBuyForm, setIsOpenBuyForm] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const calcPrice = price.replace(",", ".");
  console.log(quantity);

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
              <button
                className="productPage__content__data__buy__btn"
                onClick={() => setIsOpenBuyForm(true)}
              >
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

      {isOpenBuyForm && (
        <div className="productForm">
          <span
            className="productForm__background"
            onClick={(e) => {
              e.preventDefault();
              setIsOpenBuyForm(false);
            }}
          ></span>
          <form className="productForm__form">
            <button
              onClick={() => setIsOpenBuyForm(false)}
              type="button"
              className="closeBuyForm__wrapper"
            >
              <i className="fal fa-times closeBuyFormIcon"></i>
            </button>
            <h2 className="productForm__form__title">
              SOLICITAÇÃO DE ORÇAMENTO
            </h2>

            <div className="productForm__form__content">
              <div className="productForm__form__product">
                <div className="productForm__form__product__info">
                  <h3 className="productForm__form__product__name">
                    {name} - {code}
                  </h3>
                  <h3 className="productForm__form__product__price">
                    R$ {parseInt(calcPrice * quantity)}
                  </h3>
                </div>

                <div className="productForm__form__inputs">
                  <div className="productForm__form__inputs__quantity">
                    <select
                      className="productForm__form__inputs__quantity__input"
                      onChange={(e) => setQuantity(e.currentTarget.value)}
                    >
                      {formQuantity.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="productForm__form__inputs__user">
                <input
                  className="productForm__form__inputs__user__input buyI1"
                  placeholder="NOME"
                  type="text"
                />
                <input
                  className="productForm__form__inputs__user__input buyI2"
                  placeholder="TELEFONE"
                  type="phone"
                />
                <input
                  className="productForm__form__inputs__user__input buyI3"
                  placeholder="E-MAIL"
                  type="email"
                />
                <input
                  className="productForm__form__inputs__user__input buyI4"
                  placeholder="CEP"
                  type="number"
                />
                <input
                  className="productForm__form__inputs__user__input buyI5"
                  placeholder="ENDEREÇO"
                  type="text"
                />
                <input
                  className="productForm__form__inputs__user__input buyI6"
                  placeholder="Nº"
                  type="number"
                />
                <input
                  className="productForm__form__inputs__user__input buyI7"
                  placeholder="COMPLEMENTO"
                  type="text"
                />
                <select className="productForm__form__inputs__user__input buyI8">
                  <option value="Porto Alegre">Porto Alegre</option>
                </select>

                <select className="productForm__form__inputs__user__input buyI9">
                  <option value="RS">RS</option>
                </select>

                <textarea
                  maxLength="200"
                  placeholder="MENSAGEM"
                  id="productForm__form__inputs__user__textArea"
                ></textarea>
              </div>
              <button
                className="productForm__form__inputs__submitBtn"
                type="submit"
              >
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      )}

      <Footer />
    </>
  );
}

export default ProductPage;
