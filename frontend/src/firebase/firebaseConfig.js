// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVtZVGlyOq-MPXjcYGwPZ1GyImjpBiabU",
  authDomain: "virkoteket.firebaseapp.com",
  projectId: "virkoteket",
  storageBucket: "virkoteket.appspot.com",
  messagingSenderId: "432700482966",
  appId: "1:432700482966:web:53ff4b9c0f19b34a31e9b7",
  measurementId: "G-ZDZXZ4DE68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase storage reference
const storage = getStorage(app);
export default storage;
