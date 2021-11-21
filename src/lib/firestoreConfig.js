import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";
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

const getFirestoreDB = () => {
  return getFirestore(firebaseApp);
};

export { firebaseApp, getFirestoreDB };
