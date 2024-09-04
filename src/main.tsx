import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router basename={import.meta.env.VITE_BASE_NAME ?? '/'}>
      <App />
    </Router>
  </React.StrictMode>
);
