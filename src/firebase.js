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
import { collection, doc, addDoc, getDocs, updateDoc, where, query } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
const storage = getStorage(app);
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
export { updateDoc };
export { doc };

//FirebaseStorage
export { storage, ref, uploadBytes, getDownloadURL };
