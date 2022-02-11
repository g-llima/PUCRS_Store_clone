import "./App.css";
import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./FirebaseDB/database";
import { Routes, Route } from "react-router-dom";

import { ProductContext } from "./ProductContext";
import HomePage from "./Pages/HomePage";
import Vestuário from "./Pages/Vestuário";
import ProductPage from "./Pages/ProductPage";

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
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/vestuario" element={<Vestuário />} />
          <Route path="/teste" element={<ProductPage />} />
        </Routes>
      </ProductContext.Provider>
    </>
  );
}

export default App;
