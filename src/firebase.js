import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

export { getAuth };
export { createUserWithEmailAndPassword };
export { signInWithEmailAndPassword };
export { onAuthStateChanged };
export { signOut };
