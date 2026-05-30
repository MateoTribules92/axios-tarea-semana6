// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuF7IKK9QnT-hYsCtzAbDTg_ssfCJAbjA",
  authDomain: "authentication-app-5bd5a.firebaseapp.com",
  projectId: "authentication-app-5bd5a",
  storageBucket: "authentication-app-5bd5a.firebasestorage.app",
  messagingSenderId: "700983095911",
  appId: "1:700983095911:web:a88eeddf2ab1ee44f0dac2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);