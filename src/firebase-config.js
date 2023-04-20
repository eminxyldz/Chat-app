// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC0AAomisqY0FeLRrWyqFSS3vhL4WOEccE",
  authDomain: "chatuygulamasi-58a1b.firebaseapp.com",
  projectId: "chatuygulamasi-58a1b",
  storageBucket: "chatuygulamasi-58a1b.appspot.com",
  messagingSenderId: "861547810736",
  appId: "1:861547810736:web:5aa7ab9bdd7a93f2a79075"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();