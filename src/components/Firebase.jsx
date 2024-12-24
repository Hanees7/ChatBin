import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  Timestamp
} from "firebase/firestore"; // Add Timestamp here

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

// Export Firestore and Timestamp
export { firestore, collection, addDoc, doc, getDoc, Timestamp }; // Export Timestamp here
