// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App";
import UserProvider from "./contexts/UserProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  /* <React.StrictMode>
    <App />
  </React.StrictMode> */

  <UserProvider>
    <App />
  </UserProvider>
);
