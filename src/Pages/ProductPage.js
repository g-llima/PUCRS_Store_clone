import React, { useState, useContext } from "react";
import emailjs from "emailjs-com";
import Slider from "react-slick";

import "../Components/Styles/PagesCSS/ProductPage.css";
import { ProductContext } from "../ProductContext";
import Alert from "../Components/Alert";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import Banner from "../Components/Banner";
import Card_Product from "../Components/Card_Product";

function capitalizeString(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
}
function convertPrice(value) {
  value = value.toString();
  return (
    value.substring(0, value.length - 2) +
    "," +
    value.substring(value.length - 2)
  );
}

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  draggable: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const formQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20];

function ProductPage({ img1, type, name, price, code }) {
  const [isOpenBuyForm, setIsOpenBuyForm] = useState(false);
  const [formSucess, setFormSucess] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { contextValue } = useContext(ProductContext);

  let relatedProducts = [];
  contextValue.forEach((item) => {
    if (item.type === type) {
      relatedProducts.push(item);
    }
  });
  function removeSpecial(str) {
    str = str.replace("ã", "a");
    str = str.replace("ç", "c");
    str = str.replace(/[^a-zA-Z ]/g, "");
    str = str.replace(/\s/g, "-");
    return str;
  }
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        process.env.REACT_APP_BUY_FORM_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_BUY_FORM_USER_ID
      )
      .then(
        () => {
          setFormSucess(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setQuantity(1);
    setIsOpenBuyForm(false);
  }

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
                R$ {convertPrice(price)}
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
              setQuantity(1);
            }}
          ></span>

          <form className="productForm__form" onSubmit={sendEmail}>
            <button
              onClick={() => {
                setIsOpenBuyForm(false);
                setQuantity(1);
              }}
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
                  <input
                    type="hidden"
                    name="productName"
                    value={
                      name +
                      ", <br/>Código: " +
                      code +
                      ", <br/>Valor: R$ " +
                      convertPrice(parseInt(price * quantity)) +
                      " (TOTAL)"
                    }
                  />
                  <h3 className="productForm__form__product__name">
                    {name} - {code}
                  </h3>
                  <h3
                    className="productForm__form__product__price"
                    name="price"
                  >
                    R$ {convertPrice(parseInt(price * quantity))}
                  </h3>
                </div>

                <div className="productForm__form__inputs">
                  <div className="productForm__form__inputs__quantity">
                    <select
                      className="productForm__form__inputs__quantity__input"
                      onChange={(e) => setQuantity(e.currentTarget.value)}
                      name="quantity"
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
                  name="name"
                  required
                />
                <input
                  className="productForm__form__inputs__user__input buyI2"
                  onInput={(e) =>
                    (e.target.value = e.target.value
                      .replace(/[^0-9.]/g, "")
                      .replace(/(\..*?)\..*/g, "$1"))
                  }
                  placeholder="TELEFONE"
                  type="text"
                  min="1"
                  minLength="11"
                  maxLength="11"
                  name="phone"
                  required
                />
                <input
                  className="productForm__form__inputs__user__input buyI3"
                  placeholder="E-MAIL"
                  type="email"
                  name="email"
                  required
                />
                <input
                  className="productForm__form__inputs__user__input buyI4"
                  placeholder="CEP"
                  type="number"
                  min="1"
                  name="zipcode"
                  required
                />
                <input
                  className="productForm__form__inputs__user__input buyI5"
                  placeholder="ENDEREÇO"
                  type="text"
                  name="address"
                  required
                />
                <input
                  className="productForm__form__inputs__user__input buyI6"
                  placeholder="Nº"
                  type="number"
                  min="1"
                  name="number"
                  required
                />
                <input
                  className="productForm__form__inputs__user__input buyI7"
                  placeholder="COMPLEMENTO"
                  type="text"
                  name="comp"
                />
                <select
                  className="productForm__form__inputs__user__input buyI8"
                  name="city"
                >
                  <option value="Porto Alegre">Porto Alegre</option>
                </select>

                <select
                  className="productForm__form__inputs__user__input buyI9"
                  name="estate"
                >
                  <option value="RS">RS</option>
                </select>

                <textarea
                  maxLength="200"
                  placeholder="MENSAGEM"
                  id="productForm__form__inputs__user__textArea"
                  name="msg"
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
      {formSucess && (
        <Alert icon="fal fa-check-circle" text="Solicitação enviada!" />
      )}

      <div className="relatedProducts">
        <Banner text="PRODUTOS RELACIONADOS" />
        <Slider {...settings} className="relatedProducts__items">
          {relatedProducts.map((item, index) => (
            <Card_Product
              key={index}
              nome={item.name}
              preço={item.price}
              imgLink={item.img1}
              cardLink={`/${removeSpecial(item.name)}`}
            />
          ))}
        </Slider>
      </div>

      <Footer />
    </>
  );
}

export default ProductPage;
