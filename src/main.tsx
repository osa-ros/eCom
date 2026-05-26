import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRouter from "@routes/AppRouter";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
