import React from "react";
import "./Styles/Card_Product.css";

function Card_Product({
  nome = "Conjunto Necessaire",
  preço = "99",
  imgLink = "/Imgs/test.webp",
  especial = false,
  textoEspecial = "NOVIDADE",
}) {
  return (
    <div className="card__product">
      <div className="card__product__imgContainer">
        <img src={imgLink} alt={nome} />
        {especial && <p>{textoEspecial}</p>}
      </div>

      <div className="card__product__texts">
        <p className="card__product__texts__name">{nome}</p>
        <h3 className="card__product__texts__price">R$ {preço}</h3>
        <button className="card__product__texts__btn">VER PRODUTO</button>
      </div>
    </div>
  );
}

export default Card_Product;
