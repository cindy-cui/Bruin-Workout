import {useNavigate} from "react-router-dom";
import { userData } from "./UserData";
import {collection,doc,getDoc} from "firebase/firestore";
import db from "./Database";

export default function UpdateProfile (){

    let username="";
    let age="";
    let height="";
    let ethnicity="";
    let gender="";
    let favWorkout="";
    //This can either be the user who clicked "My Profile"
    // or the results of a profile search
    async function getUserInfo(){// Async call so getDoc can finish getting its data from server
        //before rest of program runs
        const usersRef=collection(db,"users"); //get collection reference from "users"
        try {
            const userRef= doc(usersRef,""/*should be user's username*/);//get document reference of correct profile.
            const user = await getDoc(userRef);
            if(user.exists()){//retrieve data
                username=user.get("username");
                age=user.get("age");
                height=user.get("height");
                ethnicity=user.get("ethnicity");
                gender=user.get("gender");
                favWorkout=user.get("favWorkout");
            }
            else{}//could not retrieve document snapshot
        }
        catch{
        //could not get document reference of username
        }
    }
    getUserInfo();

    function submitForm(){
        username = document.getElementById("usernameN").value;
        age = document.getElementById("ageN").value;
        height = document.getElementById("heightN").value;
        ethnicity = document.getElementById("ethnicityN").value;
        gender = document.getElementById("genderN").value;
        favWorkout = document.getElementById("favWorkoutN").value;
    }

    return(<div>
               <div className="login-field">
                    <label htmlFor="updateUsername"></label>
                    <input placeholder="Update Username" id="usernameN" defaultValue = {username} ></input>
                </div>
                <div className="login-field">
                    <label htmlFor="updateAge"></label>
                    <input placeholder="Update Age" id="ageN" defaultValue = {age} ></input>
                </div>
                <div className="login-field">
                    <label htmlFor="updateHeight"></label>
                    <input placeholder="Update Height" id="heightN" defaultValue = {height} ></input>
                </div>
                <div className="login-field">
                    <label htmlFor="updateEthnicity"></label>
                    <input placeholder="Update Ethnicity" id="ethnicityN" defaultValue = {ethnicity}></input>
                </div>
                <div className="login-field">
                    <label htmlFor="updateGender"></label>
                    <input placeholder="Update Gender" id="genderN" defaultValue = {gender} ></input>
                </div>
                <div className="login-field">
                    <label htmlFor="updateFavWorkout"></label>
                    <input placeholder="Update Favorite Workout" id="favWorkoutN" defaultValue = {favWorkout} ></input>
                </div>

                <div className="login-buttons">
                    <input value="UPDATE PROFILE" className="updateProfile-button"  onClick={submitForm}/>
                </div>
                
        </div>);
}