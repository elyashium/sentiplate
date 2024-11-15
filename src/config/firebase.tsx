import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBcN_rLeTJepx5BCsvJU6-YEjnHKnAGbKg",
  authDomain: "sentiplate.firebaseapp.com",
  projectId: "sentiplate",
  storageBucket: "sentiplate.firebasestorage.app",
  messagingSenderId: "93354993320",
  appId: "1:93354993320:web:4105a7186d1b61d9cb049d",
  measurementId: "G-57ZJN1164E"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);