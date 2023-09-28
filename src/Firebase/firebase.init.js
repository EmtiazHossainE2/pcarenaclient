// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWyWH47KG-tnHZ1b36ehDzhdjSMHlTZ1E",
  authDomain: "pcarena-d5060.firebaseapp.com",
  projectId: "pcarena-d5060",
  storageBucket: "pcarena-d5060.appspot.com",
  messagingSenderId: "1027032028991",
  appId: "1:1027032028991:web:1b55929e44d6b778aee58a",
  measurementId: "G-1W6GPV90EZ",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
