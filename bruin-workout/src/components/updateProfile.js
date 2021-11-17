import {doc, updateDoc} from "firebase/firestore";
import db from "./Database";
import rockHeadshot from '../assets/rock-headshot.jpeg';
import auth from "./Auth";
import {updateProfile} from "firebase/auth";

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
export default function UpdateProfile (props){
    if(auth.currentUser==null || auth.currentUser.uid!==props.id){//if we cannot access user (because user is not logged in)
        //or if the profile page being looked at is not the user's, then do not offer a prompt to update profile
        return(<div>    
        </div>);
    }
    let username="";
    let age="";
    let height="";
    let ethnicity="";
    let gender="";
    let favWorkout="";
    //This component must be the result of a user looking at their own profile
    async function submitForm(){
        let usernameN = document.getElementById("usernameN").value;
        let ageN = document.getElementById("ageN").value;
        let heightN = document.getElementById("heightN").value;
        let ethnicityN = document.getElementById("ethnicityN").value;
        let genderN = document.getElementById("genderN").value;
        let favWorkoutN = document.getElementById("favWorkoutN").value;
       try{
           const userReference=doc(db,"users",props.id);
           await updateDoc(userReference, {
            username : usernameN, 
            age : ageN,
            height : heightN,
            ethnicity : ethnicityN,
            gender : genderN,
            favWorkout : favWorkoutN 
        });
        const user=auth.currentUser;
        if(user!==null){
            await updateProfile(user,{displayName:usernameN});
            console.log("updated user successfully");
        }
        
        }
        catch{
            //could not get document reference of username
            console.log("Error reading document");
        }
    }

    return(<div style={{ backgroundImage: `url(${rockHeadshot})`}}>


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
                    <input type="submit" value="UPDATE PROFILE" className="updateProfile-button"  onClick={submitForm}/>
                </div>
                
        </div>);
}