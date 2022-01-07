import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { query, where } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7C9Kimzy4f2jyYBUPQ3wSdCPkbBf6xu0",
  authDomain: "istramusicshop.firebaseapp.com",
  projectId: "istramusicshop",
  storageBucket: "istramusicshop.appspot.com",
  messagingSenderId: "574533141940",
  appId: "1:574533141940:web:65335fdcfc74488f545ee1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
//Firebase
export { getAuth };
export { createUserWithEmailAndPassword };
export { signInWithEmailAndPassword };
export { onAuthStateChanged };
export { signOut };
export { sendPasswordResetEmail };
export { app };

//Firestore
export { db };
export { collection };
export { addDoc };
export { getDocs };
export { query };
export { where };
