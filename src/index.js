// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Import your global CSS file (make sure this exists)
import App from "./App"; // Import the main App component

// Render the App component inside the 'root' div in the public/index.html file
ReactDOM.render(
  <React.StrictMode>
    <App /> {/* App is the root component of your app */}
  </React.StrictMode>,
  document.getElementById("root") // This is where the app will be rendered in the DOM
);
