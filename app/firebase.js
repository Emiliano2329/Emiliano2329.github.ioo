//Importamos los módulos que nos da firebase para podernos conectar  a la misma 

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwjZxeOpErHkTVZ7pY3dq29xAbkZ96jOE",
  authDomain: "prueba-firebase-c62db.firebaseapp.com",
  projectId: "prueba-firebase-c62db",
  storageBucket: "prueba-firebase-c62db.appspot.com",
  messagingSenderId: "93918216809",
  appId: "1:93918216809:web:b7442c000777dc8d2ad8f8"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries