import auth from "./Auth"
import { createUserWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from "react-router";


export default function SignupPrompts(){
  let navigate=useNavigate();
  // Register a new user
  async function signedUp(){
    navigate("/home");
  }
  function signUp(){
  let email = document.getElementById("email").value;
  let pwd = document.getElementById("password").value;
    
    createUserWithEmailAndPassword(auth, email, pwd)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            
            console.log("made user");
            signedUp();
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
      });
    }
  return(<div>
    <input placeholder="Email Address" id="email"/>
    <br/>
    <input placeholder="Password" id="password"/>
    <div class="signup-buttons">
      <input type="submit" value="SIGN UP" class="signup-button" onClick={signUp}/>
    </div>
  </div>);
}