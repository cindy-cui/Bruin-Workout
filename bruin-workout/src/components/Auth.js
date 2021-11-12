// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged ,signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


//keep track of state changes

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

//sign out a user
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});


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
const auth= getAuth(app);
export default auth;