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

const c2Items = [
  {
    text: "Esportes e Saúde",
    link: "/",
  },
  {
    text: "Papelaria",
    link: "/",
  },
  {
    text: "Vida no Campus",
    link: "/",
  },
  {
    text: "Ecossustentável",
    link: "/",
  },
  {
    text: "Coleções",
    link: "/",
  },
  {
    text: "Escolas e Cursos",
    link: "/",
  },
  {
    text: "Sou PUCRS",
    link: "/",
  },
];

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content__column1">
          <h3 className="footer__topicTitle">Institucional</h3>
          <ul>
            {c1Items.map((item, index) => (
              <li className="footer__content__column1__item" key={index}>
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

        <div className="footer__content__column2">
          <h3 className="footer__topicTitle">Linhas de Produto</h3>
          <ul>
            {c2Items.map((item, index) => (
              <li className="footer__content__column2__item" key={index}>
                <Link to={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
