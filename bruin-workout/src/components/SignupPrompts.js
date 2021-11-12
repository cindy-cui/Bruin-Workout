import auth from "./Auth"
import { createUserWithEmailAndPassword} from "firebase/auth"

// Register a new user
function register(props){
    createUserWithEmailAndPassword(auth, props.email, props.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    }