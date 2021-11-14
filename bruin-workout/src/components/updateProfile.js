import {useNavigate} from "react-router-dom";
import { userData } from "./UserData";
import ProfileInformation from "./ProfileInformation"


export default function updateProfile (){

    let username="";
    let age="";
    let height="";
    let ethnicity="";
    let gender="";
    let favWorkout="";

    ProfileInformation.getUserInfo(); 
    
    function submitForm(){

        let username = document.getElementById("usernameN").value;
        let age = document.getElementById("ageN").value;
        let height = document.getElementById("heightN").value;
        let ethnicity = document.getElementById("ethnicityN").value;
        let gender = document.getElementById("genderN").value;
        let favWorkout = document.getElementById("favWorkoutN").value;
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