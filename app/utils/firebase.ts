// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUC-CDYi4lEMWmFW8xSKc5Jl20PYtlGnM",
  authDomain: "fishflashcards-9f596.firebaseapp.com",
  projectId: "fishflashcards-9f596",
  storageBucket: "fishflashcards-9f596.appspot.com",
  messagingSenderId: "312047614793",
  appId: "1:312047614793:web:81a41bf8da0df50133b898",
  measurementId: "G-2GVF179J9Q",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
