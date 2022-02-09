import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Styles/Nav.css";

function Nav({ navItems = [{ nome: "Nome", link: "/" }] }) {
  return (
    <nav className="nav">
      {navItems.map((item, index) => (
        <div key={index}>
          <Link to={item.link} >
            {item.nome}
          </Link>
          <i className="fal fa-angle-right navArrow"></i>
        </div>
      ))}
    </nav>
  );
}

export default Nav;
