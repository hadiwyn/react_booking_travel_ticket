import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/App";
import Home from "./pages/home";
import PesanTiket from "./pages/pesan-tiket";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />}></Route>
        <Route path="home" element={<Home />} />
        <Route path="pesantiket" element={<PesanTiket />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
