import { initializeApp } from "firebase/app";

// ========================> Storage <========================== //
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
// ========================> Firestore <========================== //
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
  getDocs,
} from "firebase/firestore";
// ========================> Auth <========================== //
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1QokcJF8cCoEmEsOmGlTmwXthBYVfFBU",
  authDomain: "job-portal-31600.firebaseapp.com",
  projectId: "job-portal-31600",
  storageBucket: "job-portal-31600.appspot.com",
  messagingSenderId: "656299741363",
  appId: "1:656299741363:web:75ac2026a8a4851cf5a0c6",
  measurementId: "G-0BGYZPP097",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  app,
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  db,
  collection,
  getDocs,
  addDoc,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};
