import React, { useState, useContext, useEffect } from "react";

import "../Components/Styles/PagesCSS/Buscar.css";
import { ProductContext } from "../ProductContext";
import Nav from "../Components/Nav.jsx";

function Buscar() {
  const [products, setProducts] = useState([]);

  const { contextValue } = useContext(ProductContext);

  let tempProducts = [];
  useEffect(() => {
    contextValue.map((item) => {
      if (item["name"].toLowerCase().includes("conjunto")) {
        tempProducts.push(item);
      }
    });
    setProducts(tempProducts);
  }, [contextValue]);

  console.log(products);

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
