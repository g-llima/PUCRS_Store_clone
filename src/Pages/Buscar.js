import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Components/Styles/PagesCSS/Buscar.css";
import { ProductContext } from "../ProductContext";

import Nav from "../Components/Nav.jsx";
import CardProduct from "../Components/Card_Product.jsx";

function removeSpecial(str) {
  str = str.replace("ã", "a");
  str = str.replace("ç", "c");
  str = str.replace(/[^a-zA-Z ]/g, "");
  str = str.replace(/\s/g, "-");
  return str;
}
function convertPrice(value) {
  value = value.toString();
  return (
    value.substring(0, value.length - 2) +
    "," +
    value.substring(value.length - 2)
  );
}

function Buscar() {
  const { s } = useParams();
  const [products, setProducts] = useState([]);
  const [search] = useState(s.substring(2).toLowerCase());

  const { contextValue } = useContext(ProductContext);

  let tempProducts = [];

  useEffect(() => {
    contextValue.map((item) => {
      if (item["name"].toLowerCase().includes(search)) {
        tempProducts.push(item);
      }
    });
    setProducts(tempProducts);
  }, [contextValue]);

  return (
    <div className="search">
      <Nav
        navItems={[
          { nome: "Home", link: "/" },
          { nome: "Resultado da Busca", link: "/buscar" },
        ]}
      />

      <div className="search__content">
        {products.length === 0 ? (
          <div className="search__content__notFound">
            <p className="search__content__notFound__text">
              Sua busca por <span>{search}</span> não encontrou nenhum resultado
              :( <br />
              Por favor, tente outra vez com termos menos específicos.
            </p>
          </div>
        ) : (
          <>
            <p className="search__content__header">
              Você buscou por <span>{search}</span>
            </p>

            <p className="search__content__resultLength">
              {products.length} itens encontrados
            </p>

            <div className="search__content__products">
              {products.map((item, index) => (
                <CardProduct
                  key={index}
                  cardLink={`/${removeSpecial(item.name)}`}
                  nome={item.name}
                  preço={convertPrice(item.price)}
                  imgLink={item.img1}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Buscar;
