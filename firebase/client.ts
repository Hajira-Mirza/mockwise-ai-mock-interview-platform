// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyj_YBSmxZrqVJG_HI_XOqiJv6BSsNv_k",
  authDomain: "mockwise-daca9.firebaseapp.com",
  projectId: "mockwise-daca9",
  storageBucket: "mockwise-daca9.firebasestorage.app",
  messagingSenderId: "306596899209",
  appId: "1:306596899209:web:5349e2160534d5ec65d958",
  measurementId: "G-TVVBETPWCK"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);