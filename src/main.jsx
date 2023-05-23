import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppproviderContext } from "./pages/Context";
import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppproviderContext>
        <App />
      </AppproviderContext>
    </BrowserRouter>
  </React.StrictMode>
);
