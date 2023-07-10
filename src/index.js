import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

import { DataContext, DataProvider } from "./Frontend/Context/DataContext";
import { AuthContext, AuthProvider } from "./Frontend/Context/AuthContext";

export const useData = () => useContext(DataContext);
export const useAuth = () => useContext(AuthContext);

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <Router>
          <App />
        </Router>
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
