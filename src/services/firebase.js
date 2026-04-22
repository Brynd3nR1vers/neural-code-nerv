import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // <--- 1. Importamos Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAJ_qax9YHhxVVEQ90RJkRWsTqxax7uhDw",
  authDomain: "neural-code-nerv.firebaseapp.com",
  projectId: "neural-code-nerv",
  storageBucket: "neural-code-nerv.firebasestorage.app",
  messagingSenderId: "1020386733463",
  appId: "1:1020386733463:web:266446b8de6c2a8bb0e8d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 2. Inicializamos y exportamos la base de datos
export const db = getFirestore(app);