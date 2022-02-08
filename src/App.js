import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Vestuário from "./Pages/Vestuário";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/vestuario" element={<Vestuário />} />
      </Routes>
    </>
  );
}

export default App;
