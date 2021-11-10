// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import LoginPrompts from "./LoginPrompts";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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

const app = initializeApp(firebaseConfig);

var firebase = require('firebase');
var firebaseui = require('firebaseui');

var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig={
    callbacks: {
        signInSuccessWithAuthResult: function() {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          //For now, return true
          return true;
        },
        uiShown: function() {
          <LoginPrompts />
          //show login prompts
          document.getElementById('loader').style.display = 'none';
        }
      },
    signInSuccessUrl: '/',
    signInOptions: firebase.auth.EmailAuthProvider.PROVIDER_ID,

};

ui.start('#firebaseui-auth-container',uiConfig);
