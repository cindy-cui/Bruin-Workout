import {useNavigate} from "react-router-dom";
import auth from "./Auth";
import { signInWithEmailAndPassword} from "firebase/auth"
  //sign in user
function signin(email,password){
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    return true;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return false;
  });
}

export default function LoginPrompts(){
    let navigate=useNavigate();

    async function handleSignin(){
    navigate("/signup");
    }
    async function submitForm(){
        let email = document.getElementById("email").value;
        let pwd = document.getElementById("password").value;
        //todo: check input
        if (email==="" || pwd===""){
          //todo: error
          return;
        }
        if(/*signin(email,pwd)*/ true){
            //todo:accept user; move to new page
            navigate("/home");
        }
        else{
            //todo:error
            return;
        }
    }
    return(<div>
                <div class="login-field">
                    <label for="userEmail"></label>
                    <input placeholder="Email Address" id="email"></input>
                </div>
                <div class="login-field">
                    <label for="userPassword"></label>
                    <input type="password" placeholder="Password" id="password"></input>
                </div>
                <div class="login-buttons">
                    <input type="submit" value="LOG IN" class="login-button" onClick={submitForm}/>
                    <br/>
                   <input type="submit" value="SIGN UP" class="login-button" onClick={handleSignin}/>
                </div>
        </div>);
}

