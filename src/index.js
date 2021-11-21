import React from "react";
import ReactDOM from "react-dom";
import "../src/assets/css/styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/js/bootstrap.bundle.min"; //Necesario para hacer uso del JS de Bootstrap
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { BrowserRouter } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyAEtAmAVDqH7r2E9yCZRBPlNyJBsjBImgQ",

  authDomain: "web-deporte.firebaseapp.com",

  projectId: "web-deporte",

  storageBucket: "web-deporte.appspot.com",

  messagingSenderId: "936541629193",

  appId: "1:936541629193:web:8b1f5766452f38762fc1d8",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const autentication = getAuth(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
