// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC1L6QJK8EUi-j1F3_eB5Af0D1aBhgrZ-s",
  authDomain: "coffee-store-e5d12.firebaseapp.com",
  projectId: "coffee-store-e5d12",
  storageBucket: "coffee-store-e5d12.appspot.com",
  messagingSenderId: "311574428913",
  appId: "1:311574428913:web:4acb82be83de7de565bd50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;