import React from 'react';
import { Navigate} from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);

const PrivateRoute = () => {
    const auth = null; // determine if authorized

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Navigate to="/home" /> : <Navigate to="/login" />;
}
export default PrivateRoute;