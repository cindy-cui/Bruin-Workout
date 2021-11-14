import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAoyhG9AA-GVRoCfTMoJXDQiSXCdLaKJPM",
    authDomain: "bruin-workout-6a1e3.firebaseapp.com",
    projectId: "bruin-workout-6a1e3",
    storageBucket: "bruin-workout-6a1e3.appspot.com",
    messagingSenderId: "1024573966853",
    appId: "1:1024573966853:web:2ce8d5626e4204d3e3aa6c",
    measurementId: "G-ZJGBC4EGC7"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;