import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout.jsx";
import MainPage from "./Pages/MainPage/MainPage.jsx";
import Oferta from "./Pages/Offer/Offer.jsx";
import Cennik from "./Pages/Cennik/cennik.jsx";
import Kontakt from "./Pages/Contact/kontakt.jsx";
import Galeria from "./Pages/Gallery/galeria.jsx";
import Zamowienie from "./Pages/Order/zamowienie.jsx";
import Admin from "./Pages/Admin/Admin.jsx";
import LoginPage from "./Pages/Admin/LoginPage/LoginPage.jsx";
import EditingForm from "./Pages/Admin/EditingForm.jsx/EditingForm.jsx";

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
        <Route path="admin" element={<Admin />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="edytuj" element={<EditingForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
