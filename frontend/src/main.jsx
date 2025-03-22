import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./contextApi/AuthContext.jsx";
import { PaymentProvider } from "./contextApi/PaymentContext.jsx";


createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <PaymentProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </PaymentProvider>
  </AuthProvider>
);
