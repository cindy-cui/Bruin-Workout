import auth from "./Auth"
import { createUserWithEmailAndPassword,updateProfile,} from "firebase/auth";
import { useNavigate } from "react-router";
import {doc, setDoc } from "firebase/firestore";
import db from "./Database";

/*  Here is how the object for each user is stored by default
 const userData = {
    username:"",
    age:"",
    height:"",
    ethnicity:"",
    gender:"",
    favWorkout:"",
    workouts:[],
};
*/

export default function SignupPrompts(){
  let navigate=useNavigate();
  let errorMessage="";
  // Register a new user
  async function signedUp(){
    navigate("/home");
  }
  async function addUser(username,userID){
    try{
      const docRef= doc(db,"users",userID);
      await setDoc(docRef,{
      username:username,
      age:"",
      height:"",
      ethnicity:"",
      gender:"",
      favWorkout:"",
      workouts:{
        monday:{name:"", type:""},
        tuesday:{name:"", type:""},
        wednesday:{name:"", type:""},
        thursday:{name:"", type:""},
        friday:{name:"", type:""},
        saturday:{name:"", type:""},
        sunday:{name:"", type:""},
      }, 
      });
    }
    catch{
      console.log("could not upload information");
    }
  }
  async function signUp(){
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("password").value;
    let username = document.getElementById("username").value;
    try{
      const user= (await createUserWithEmailAndPassword(auth, email, pwd)).user;
      await updateProfile(user,{displayName:username});
      const userID=user.uid;
      await addUser(username,userID);
      console.log("added user");
      console.log(user);
      signedUp();
    }   
    catch (error){     
      const errorCode = error.code;
      errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
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