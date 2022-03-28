import React from "react";
import "./Styles/Card_Type.css";
import { HashLink as Link } from "react-router-hash-link";

// LINE CARDS
function Card_Type({ name, icon, redirectUrl }) {
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
