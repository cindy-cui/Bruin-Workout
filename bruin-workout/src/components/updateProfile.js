import {useNavigate} from "react-router-dom";
import { userData } from "./UserData";
import db from "./Database";
import { collection, doc, getDoc,updateDoc } from "firebase/firestore";
import auth from "./Auth";


export default function updateProfile (){
    function submitForm(){

        let username = document.getElementById("username").value;
        let age = document.getElementById("age").value;
        let height = document.getElementById("height").value;
        let ethnicity = document.getElementById("ethnicity").value;
        let gender = document.getElementById("gender").value;
        let favWorkout = document.getElementById("favWorkout").value;
    }
    return(<div>
                <div className="login-field">
                    <label htmlFor="updateUsername"></label>
                    <input placeholder="Update Username" id="username"></input>
                </div>
                <div className="login-field">
                    <label htmlFor="updateAge"></label>
                    <input placeholder="Update Age" id="age"></input>
                </div>
                <div className="login-field">
                    <label htmlFor="updateHeight"></label>
                    <input placeholder="Update Height" id="height"></input>
                </div>
                <div className="login-field">
                    <label htmlFor="updateEthnicity"></label>
                    <input placeholder="Update Ethnicity" id="ethnicity"></input>
                </div>
                <div className="login-field">
                    <label htmlFor="updateGender"></label>
                    <input placeholder="Update Gender" id="gender"></input>
                </div>
                <div className="login-field">
                    <label htmlFor="updateFavWorkout"></label>
                    <input placeholder="Update Favorite Workout" id="favWorkout"></input>
                </div>




                <div className="login-buttons">
                    <input value="UPDATE PROFILE" className="updateProfile-button"  onClick={submitForm}/>
                </div>
                
        </div>);
}