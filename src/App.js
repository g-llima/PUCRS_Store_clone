import "./App.css";
import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./FirebaseDB/database";
import { Routes, Route } from "react-router-dom";

import { ProductContext } from "./ProductContext";
import ScrollToTop from "./ScrollToTop";
import HomePage from "./Pages/HomePage";
import Vestuário from "./Pages/Vestuário";
import ProductPage from "./Pages/ProductPage";

function removeSpecial(str) {
  str = str.replace("ã", "a");
  str = str.replace("ç", "c");
  str = str.replace(/[^a-zA-Z ]/g, "");
  str = str.replace(/\s/g, "-");
  return str;
}

function App() {
  const [contextValue, setContextValue] = useState([]);

  const colRef = collection(db, "products");
  useEffect(() => {
    getDocs(colRef).then((snapshot) => {
      const newProducts = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setContextValue(newProducts);
    });
  }, []);

  return (
    <>
      <ProductContext.Provider value={{ contextValue, setContextValue }}>
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/vestuario" element={<Vestuário />} />

          {contextValue.map((item, index) => (
            <Route
              key={index}
              path={`/${removeSpecial(item.name)}`}
              element={
                <ProductPage
                  img1={item.img1}
                  type={item.type}
                  name={item.name}
                  price={item.price}
                  code={item.code}
                />
              }
            />
          ))}
        </Routes>
      </ProductContext.Provider>
    </>
  );
}

export default App;
