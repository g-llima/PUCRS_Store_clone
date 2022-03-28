import React from "react";

import "../Components/Styles/PagesCSS/Buscar.css";
import Nav from "../Components/Nav.jsx";

function Buscar() {
  return (
    <div className="search">
      <Nav
        navItems={[
          { nome: "Home", link: "/" },
          { nome: "Resultado da Busca", link: "/buscar" },
        ]}
      />

      <div className="search__content">
        <p className="search__content__header">
          Você buscou por <span>a</span>
        </p>

        <p className="search__content__resultLength">151 itens encontrados</p>
      </div>
    </div>
  );
}

export default Buscar;
