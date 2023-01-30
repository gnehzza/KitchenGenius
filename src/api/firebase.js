import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRC3SJAzb_lvsvxi8fFbmBxWKuMZyMlvo",
  authDomain: "kitchengeniusmvp.firebaseapp.com",
  databaseURL: "https://kitchengeniusmvp-default-rtdb.firebaseio.com",
  projectId: "kitchengeniusmvp",
  appId: "1:524704803490:web:eb7fe063908ff33530c5fb",
  measurementId: "G-ME4J7Z1VQB",
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);

export function getFirestoreDB() {
  return getFirestore(firebase);
}

export function getFirebaseAuth() {
  return getAuth(firebase);
}
