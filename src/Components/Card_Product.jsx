import React from "react";
import "./Styles/Card_Product.css";

function Card_Product() {
  return (
    <div className="card__product">
      <img src="/Imgs/test.webp" alt="produto" className="card__product__img" />
      <div className="card__product__texts">
        <p className="card__product__texts__name">Bolsa Escolar Grande</p>
        <h3 className="card__product__texts__price">R$ 120,00</h3>
        <button className="card__product__texts__btn">VER PRODUTO</button>
      </div>
    </div>
  );
}

export default Card_Product;
