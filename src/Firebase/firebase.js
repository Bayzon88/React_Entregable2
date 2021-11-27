import { initializeApp } from "../../node_modules/firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEtAmAVDqH7r2E9yCZRBPlNyJBsjBImgQ",

  authDomain: "web-deporte.firebaseapp.com",

  projectId: "web-deporte",

  storageBucket: "web-deporte.appspot.com",

  messagingSenderId: "936541629193",

  appId: "1:936541629193:web:8b1f5766452f38762fc1d8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
