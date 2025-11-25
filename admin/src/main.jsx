// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";

// createRoot(document.getElementById("root")).render(
//   // <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   {/* </StrictMode> */}
// );


import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import ShopContextProvider from './contexts/ShopContext.jsx'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <ShopContextProvider> */}
      <App />
    {/* </ShopContextProvider> */}
  </BrowserRouter>
);
