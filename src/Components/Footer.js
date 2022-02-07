import React from "react";
import "./Styles/Footer.css";
import { HashLink as Link } from "react-router-hash-link";

const c1Items = [
  {
    text: "Sobre a PUCRS Store",
    link: "/",
  },
  {
    text: "Formas de Pagamento",
    link: "/",
  },
  {
    text: "Fale Conosco",
    link: "/",
  },
];
const c1Icons = [
  {
    icon: "fab fa-facebook-f",
    link: "https://www.facebook.com/pucrs/",
  },
  {
    icon: "fab fa-instagram",
    link: "https://www.instagram.com/pucrsstore/",
  },
];

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content__column1">
          <h3 className="footer__topicTitle">Institucional</h3>
          <ul className="footer__content__column1__items">
            {c1Items.map((item, index) => (
              <li className="footer__content__column1__items__item" key={index}>
                <Link to={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
          <h3 className="footer__topicTitle2">Continue conectado</h3>
          <div className="footer__content__column1__icons">
            {c1Icons.map((item, index) => (
              <a key={index} href={item.link} target="_blank">
                <i className={`${item.icon} footerIcon`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
