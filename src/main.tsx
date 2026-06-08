import App from "./App";
import "./styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");

if (!root) {
  throw new Error("No se encontro el elemento principal");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
