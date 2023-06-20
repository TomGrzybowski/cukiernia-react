import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./styles/globals.css";
import "./styles/variables.css";
import { BrowserRouter } from "react-router-dom";

const fontLink = React.createElement("link", {
  href: "https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Sriracha&display=swap",
  rel: "stylesheet",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {fontLink}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
