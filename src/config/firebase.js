// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXC21e3vuwkXHGO95ReGnNjqu-gFWjb7k",
  authDomain: "esotre-6cad5.firebaseapp.com",
  projectId: "esotre-6cad5",
  storageBucket: "esotre-6cad5.appspot.com",
  messagingSenderId: "828447965921",
  appId: "1:828447965921:web:c4fcab1382bce65bfcada0",
  measurementId: "G-09LEC0E7Y8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);    
const auth = getAuth(app)

const firestore = getFirestore()

export {auth , firestore}