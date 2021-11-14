import auth from "./Auth"
import { createUserWithEmailAndPassword,updateProfile} from "firebase/auth"
import { useNavigate } from "react-router";


export default function SignupPrompts(){
  let navigate=useNavigate();
  let errorMessage="";
  // Register a new user
  async function signedUp(){
    navigate("/home");
  }
  async function setUpUser(username){
    await updateProfile(auth,{displayName:username});
  }
  function signUp(){
  let email = document.getElementById("email").value;
  let pwd = document.getElementById("password").value;
  let username = document.getElementById("username").value;
    
    createUserWithEmailAndPassword(auth, email, pwd)
          .then((userCredential) => {
            // Signed in 
            const username = userCredential.user;
            // ...
            setUpUser(username);
            console.log("made user");
            signedUp();
          })
          .catch((error) => {
            const errorCode = error.code;
             errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
      });
    }
  return(<div>
    <div className="login-field">
      <input placeholder="Email Address" id="email"/>
      <input type="password" placeholder="Password" id="password"/>
      <input placeholder="Username" id="username"></input>
    </div>
    <div class="login-buttons">
      <input value="SIGN UP" class="signup-button" type="submit" onClick={signUp}/>
    </div>
    <div class="error-message">
      {errorMessage}
    </div>
  </div>);
}