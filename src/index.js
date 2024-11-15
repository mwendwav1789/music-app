import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Ensure your Tailwind CSS is being loaded here
import App from "./App";

// Correct target element for rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the app with StrictMode enabled
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
