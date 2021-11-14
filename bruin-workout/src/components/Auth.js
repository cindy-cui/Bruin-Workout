// Import the functions you need from the SDKs you need
import app from "./FirebaseConfig";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged ,signOut } from "firebase/auth";

//keep track of state changes
/*onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    const email = user.email; 
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
*/
const auth= getAuth(app);
export default auth;