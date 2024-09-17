// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEumdMYOTI1Ptf8r_vswM1_-TcDGHTSzk",
  authDomain: "navbar-login-f0ef7.firebaseapp.com",
  projectId: "navbar-login-f0ef7",
  storageBucket: "navbar-login-f0ef7.appspot.com",
  messagingSenderId: "505659091466",
  appId: "1:505659091466:web:10101c66c50f30a8ee0df3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();