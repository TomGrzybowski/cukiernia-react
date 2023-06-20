// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import "./App.css";

import Layout from "./Layout/Layout.jsx";
import MainPage from "./Pages/MainPage/MainPage.jsx";
// import Prices from "./Prices/Prices.jsx";
import Oferta from "./Pages/Offer/Offer.jsx";
import Cennik from "./Pages/Cennik/cennik.jsx";
import Kontakt from "./Pages/Contact/kontakt.jsx";
import Galeria from "./Pages/Gallery/galeria.jsx";
import Zamowienie from "./Pages/Order/zamowienie.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="cennik" element={<Cennik />} />
        <Route path="oferta" element={<Oferta />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="galeria" element={<Galeria />} />
        <Route path="zamowienie" element={<Zamowienie />} />
      </Route>
    </Routes>
  );
}

export default App;
