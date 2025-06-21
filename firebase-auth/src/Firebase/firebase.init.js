//  DO NOT SHARE THIS FILE (VERY SENCITIVE)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYpqMmD6XRGEhT3hZ2nxso5As626HHk3Y",
  authDomain: "first-firebase-auth-73715.firebaseapp.com",
  projectId: "first-firebase-auth-73715",
  storageBucket: "first-firebase-auth-73715.firebasestorage.app",
  messagingSenderId: "475098904122",
  appId: "1:475098904122:web:205a406dd249b150d82703"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);