// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvJAciBPyirX72kGnyoYkoaPnErt2EAPc",
  authDomain: "qr-bioplastic-scanner.firebaseapp.com",
  projectId: "qr-bioplastic-scanner",
  storageBucket: "qr-bioplastic-scanner.firebasestorage.app",
  messagingSenderId: "195981610301",
  appId: "1:195981610301:web:acf704fe30421c8a618954",
  measurementId: "G-VPZW6TY348",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
