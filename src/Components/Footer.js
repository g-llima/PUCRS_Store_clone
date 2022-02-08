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
                <Link className="footLink" to={item.link}>
                  {item.text}
                </Link>
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
              <li className="footer__content__column2__item " key={index}>
                <Link className="footLink" to={item.link}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__content__column3">
          <div className="footer__content__column3__phone">
            <i className="fal fa-phone-alt"></i>
            <a href="tel:+555133203500" className="footLink">
              (51) 3320-3500
            </a>
          </div>

          <div className="footer__content__column3__email">
            <i className="fal fa-envelope"></i>
            <a href="mailto:pucrsstore@pucrs.br" className="footLink">
              pucrsstore@pucrs.br
            </a>
          </div>

          <div className="footer__content__column3__texts">
            <h4>Horário de atendimento:</h4>
            <p>
              Atendimento presencial de segunda a sexta-feira, das 9h às
              21h30min.
              <br /> Para maiores informações entre em contato pelo e-mail&nbsp;
              <a href="mailto:pucrsstore@pucrs.br" className="footLink2">
                pucrsstore@pucrs.br
              </a>
              , pelo telefone&nbsp;
              <a href="tel:+555133534860" className="footLink2">
                (51) 3353-4860
              </a>
              &nbsp;ou pelo WhatsApp&nbsp;
              <a href="tel:+5551996884990" className="footLink2">
                (51) 99688-4990
              </a>
              . Os produtos da loja também podem ser adquiridos através do site
              ou WhatsApp.
            </p>
            <p className="footer__content__column3__texts__map">
              <a
                className="footLink2"
                href="https://www.google.com/maps/place/Living+360°/@-30.0590135,-51.1762396,17z/data=!4m8!1m2!2m1!1sLiving+360°!3m4!1s0x95197729bdae1b19:0xc9dad1213413cf45!8m2!3d-30.0590419!4d-51.1740509"
                target="_blank"
              >
                Av. Ipiranga, 6681 - Porto Alegre/RS Living 360° (Prédio 15) -
                Térreo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
