import React, { useContext } from "react";
import "./Styles/News.css";

import Banner from "./Banner.jsx";
import Card_Product from "./Card_Product";

const sampleProducts = [
  {
    name: "Conjunto Necessaire",
    price: "44,00",
    especial: true,
    imgLink:
      "https://firebasestorage.googleapis.com/v0/b/pucrs-store.appspot.com/o/1.webp?alt=media&token=cdc2b6a6-d718-4ce3-a787-9272c30ef050",
  },
  {
    name: "Estojo Duplo",
    price: "22,00",
    especial: true,
    imgLink:
      "https://firebasestorage.googleapis.com/v0/b/pucrs-store.appspot.com/o/2.webp?alt=media&token=839e438b-f908-4be9-b0f6-ad4420fdabc6",
  },
  {
    name: "Bolsa Térmica Linha Querubim",
    price: "131,66",
    especial: true,
    imgLink:
      "https://firebasestorage.googleapis.com/v0/b/pucrs-store.appspot.com/o/3.webp?alt=media&token=93a26069-fae2-4440-b65f-4ee078bb40b1",
  },
  {
    name: "Marmita Silicone sem Divisória",
    price: "68,00",
    especial: true,
    imgLink:
      "https://firebasestorage.googleapis.com/v0/b/pucrs-store.appspot.com/o/4.webp?alt=media&token=ce37d317-5015-40cb-8e2b-1d614e30b258",
  },
];
function removeSpecial(str) {
  str = str.replace("ã", "a");
  str = str.replace("ç", "c");
  str = str.replace(/[^a-zA-Z ]/g, "");
  str = str.replace(/\s/g, "-");
  return str;
}

function News() {
  return (
    <div className="news">
      <Banner text="NOVIDADE" />
      <div className="news__procuts">
        {sampleProducts.map((item, index) => (
          <Card_Product
            nome={item.name}
            preço={item.price}
            imgLink={item.imgLink}
            cardLink={`/${removeSpecial(item.name)}`}
            especial={item.especial}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default News;
