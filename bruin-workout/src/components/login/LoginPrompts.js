import {useNavigate} from "react-router-dom";
import auth from "../Auth";
import { signInWithEmailAndPassword,signOut,} from "firebase/auth";

export default function LoginPrompts(){//comments by Daniel Shim
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  let navigate=useNavigate();
  let errorMessage="";
  async function goToSignIn(){
  navigate("/signup");
  }
  async function goToHome(){
    navigate("/home");
  }
  //have user try to login
  function submitForm(){
    let email = document.getElementById("email").value;
    
    let pwd = document.getElementById("password").value;
    //attempt to use submitted email and password and sign in
    signInWithEmailAndPassword(auth, email, pwd)
      .then((userCredential) => { //sign in successful
        goToHome(); //send user to home page; auth.currentUser will now hold the user's information, including UID
      })
      .catch((error) => { //send error information to console
        const errorCode = error.code;
        errorMessage = error.message; //TODO: make it so error message prints to user
        console.log(errorCode, errorMessage);
      });
    
  }
    return(<div>
                <div className="login-field">
                    <label htmlFor="userEmail"></label>
                    <input placeholder="Email Address" id="email"></input>
                </div>
                <div className="login-field">
                    <label htmlFor="userPassword"></label>
                    <input type="password" placeholder="Password" id="password"></input>
                </div>
                
                <div className="login-buttons">
                    <input value="LOG IN" className="login-button"  onClick={submitForm}/>
                    <br/>
                   <input value="SIGN UP" className="login-button" onClick={goToSignIn}/>
                </div>
                <div className="error-message">
                  {errorMessage}
                </div>
        </div>);
}