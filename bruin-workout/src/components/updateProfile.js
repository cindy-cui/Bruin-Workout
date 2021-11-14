import {useNavigate} from "react-router-dom";
import { userData } from "./UserData";
import {collection,doc,getDoc, updateDoc} from "firebase/firestore";
import db from "./Database";
import rockHeadshot from '../assets/rock-headshot.jpeg';

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
        let usernameN = document.getElementById("usernameN").value;
        let ageN = document.getElementById("ageN").value;
        let heightN = document.getElementById("heightN").value;
        let ethnicityN = document.getElementById("ethnicityN").value;
        let genderN = document.getElementById("genderN").value;
        let favWorkoutN = document.getElementById("favWorkoutN").value;


        const usersRef=collection(db,"users"); //get collection reference from "users"
       const userRef = doc(); 
        try {
            const userRef= doc(usersRef,""/*should be user's username*/);//get document reference of correct profile.
        }
        catch{
            //could not get document reference of username
        }

        async function changeProperties(userReference){
            await updateDoc(userReference, {
                username : usernameN, 
                age : ageN,
                height : heightN,
                ethnicity : ethnicityN,
                gender : genderN,
                favWorkout : favWorkoutN 
            }); 
        }

       
        changeProperties(userRef); 

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