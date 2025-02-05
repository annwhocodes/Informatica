import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Make sure this import is correct
import App from "../src/App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <AuthProvider> {/* Wrap the entire app with AuthProvider */}
        <App />
      </AuthProvider>
    </Router>
  </StrictMode>
);
