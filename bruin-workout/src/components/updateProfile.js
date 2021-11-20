import {doc, updateDoc} from "firebase/firestore";
import db from "./Database";
import rockHeadshot from '../assets/rock-headshot.jpeg';
import auth from "./Auth";
import {updateProfile} from "firebase/auth";
import { useNavigate } from "react-router";

export default function UpdateProfile(props){
    let navigate=useNavigate();
    if(auth.currentUser==null || auth.currentUser.uid!==props.id){//if we cannot access user (because user is not logged in)
        //or if the profile page being looked at is not the user's, then do not offer a prompt to update profile
        return(<div/>);
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
        let newProfile={};
        if(usernameN!=="") newProfile.username=usernameN;
        if(ageN!=="") newProfile.age=ageN;
        if(heightN!=="") newProfile.height=heightN;
        if(ethnicityN!=="")newProfile.ethnicity=ethnicityN;
        if(genderN!=="")newProfile.gender=genderN;
        if(favWorkoutN!=="")newProfile.favWorkout=favWorkoutN;
       try{
           const userReference=doc(db,"users",props.id);
           await updateDoc(userReference, newProfile);
            const user=auth.currentUser;
            if(user!==null){
            try{
                if(usernameN!=="")
                    await updateProfile(user,{displayName:usernameN});
                console.log("updated user successfully");
                navigate("/home");
            }
            catch{
                console.log("error updating profile");
            }
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