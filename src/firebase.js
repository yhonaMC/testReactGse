// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjr2Y6h4h856O93QiPHAokSIw2rshzJHo",
  authDomain: "react-fb-auth-7048e.firebaseapp.com",
  projectId: "react-fb-auth-7048e",
  storageBucket: "react-fb-auth-7048e.appspot.com",
  messagingSenderId: "234944977889",
  appId: "1:234944977889:web:78fca596f02d04355b50a0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
