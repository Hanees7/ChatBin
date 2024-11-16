// src/components/Firebase.jsx

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDoc } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClprjF7Z0f1yyDSyVRnDYfdf8yvp-HBJ0",
  authDomain: "chatbin-eb80f.firebaseapp.com",
  projectId: "chatbin-eb80f",
  storageBucket: "chatbin-eb80f.firebasestorage.app",
  messagingSenderId: "1077282514277",
  appId: "1:1077282514277:web:8a54344e54c4736cf3ad8c",
  measurementId: "G-3RES2CCT6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Exporting Firestore methods
export { firestore, collection, addDoc, doc, getDoc };
