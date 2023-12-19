import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// #region styles import
import "@/styles/variables.scss";
import "@/styles/reset.scss";
import "@/styles/index.scss";
// #endregion

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
