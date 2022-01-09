// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbT5mPNIBtkfXHzyq2hiX_tiYh8Qhltcg",
  authDomain: "cards-3869e.firebaseapp.com",
  projectId: "cards-3869e",
  storageBucket: "cards-3869e.appspot.com",
  messagingSenderId: "596139116865",
  appId: "1:596139116865:web:daf157abf2dff0275cb9c0",
  measurementId: "G-TXP0KLN24F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { analytics, collection, getDocs, db };
