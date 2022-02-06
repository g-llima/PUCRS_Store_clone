import React from "react";
import "./Styles/Card_Type.css";
import { HashLink as Link } from "react-router-hash-link";

function Card_Type({
  name = "EMPTY",
  icon = "papelaria.webp",
  redirectUrl = "/",
}) {
  return (
    <>
      <Link to={redirectUrl}>
        <div className="cardType">
          <div className="cardType__content">
            <img
              src={`/Imgs/line/${icon}`}
              alt={name}
              className="cardType__content__img"
            />
            <h2 className="cardType__content__text">{name}</h2>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card_Type;
