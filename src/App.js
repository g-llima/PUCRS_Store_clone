import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Vestuário from "./Pages/Vestuário";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/vestuario" element={<Vestuário />} />
        <Route path="/teste" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
