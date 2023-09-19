// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEtPKSgcg3xqaC9VTDv3r17GEZ1n103xE",
  authDomain: "bharat-one-9494e.firebaseapp.com",
  projectId: "bharat-one-9494e",
  storageBucket: "bharat-one-9494e.appspot.com",
  messagingSenderId: "611904053548",
  appId: "1:611904053548:web:a532ebf2f373e60c14cc89",
  measurementId: "G-RXG5C5XQ66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);