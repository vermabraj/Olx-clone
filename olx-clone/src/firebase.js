

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDpACTQ-DSscVNPTKl944BGZfouZOqhvmM",
  authDomain: "react-olx-authentication.firebaseapp.com",
  projectId: "react-olx-authentication",
  storageBucket: "react-olx-authentication.appspot.com",
  messagingSenderId: "927970132407",
  appId: "1:927970132407:web:7f9b380a5390ee44ef6832",
  measurementId: "G-05STQ7EKGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;