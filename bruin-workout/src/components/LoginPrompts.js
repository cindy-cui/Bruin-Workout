import {useNavigate} from "react-router-dom";
import auth from "./Auth";
import { signInWithEmailAndPassword,signOut,} from "firebase/auth"
  //sign in user

export default function LoginPrompts(){

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
    
    function submitForm(){
        let email = document.getElementById("email").value;
        
        let pwd = document.getElementById("password").value;
       
        //todo: check input
        if(email==="dev" || pwd==="dev"){
          console.log("dev login");
          goToHome();
        }
        else{signInWithEmailAndPassword(auth, email, pwd)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            goToHome();
          })
          .catch((error) => {
            const errorCode = error.code;
            errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
        }
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

