import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App";
import GlobalStyles from "./global";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <GlobalStyles />

        <App />
    </StrictMode>
);
