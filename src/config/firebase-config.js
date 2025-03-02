import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCoxmQmdKAzK4OY7y9O6qtUtXpa-Pjw0Sk",
  authDomain: "tempchat-3109.firebaseapp.com",
  projectId: "tempchat-3109",
  storageBucket: "tempchat-3109.firebasestorage.app",
  messagingSenderId: "427227343653",
  appId: "1:427227343653:web:aeb335a973d7c947a648cc",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
