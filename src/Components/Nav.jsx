import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Styles/Nav.css";

function Nav({ navItems = [{ nome: "Nome", link: "/" }] }) {
  return (
    <nav className="nav">
      {navItems.map((item, index) => (
        <>
          <Link to={item.link} key={index}>
            {item.nome}
          </Link>
          <i className="fal fa-angle-right navArrow"></i>
        </>
      ))}
    </nav>
  );
}

export default Nav;
