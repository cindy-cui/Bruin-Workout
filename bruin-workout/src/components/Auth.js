// Import the functions you need from the SDKs you need
import app from "./FirebaseConfig";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged ,signOut } from "firebase/auth";

//keep track of state changes
<<<<<<< Updated upstream
/*onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
=======
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User

    //initialize properties for each user
    const uid = user.uid; 
    const email = user.email; 
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
*/
=======

>>>>>>> Stashed changes
const auth= getAuth(app);
export default auth;