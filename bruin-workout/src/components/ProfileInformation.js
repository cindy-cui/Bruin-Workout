import { userData } from "./UserData";
import db from "./Database";
import { collection, doc, getDoc,updateDoc } from "firebase/firestore";
import auth from "./Auth";
import { getData } from "./UserData";


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
async function get(){
    var data=await getData(auth.currentUser.uid);
    return data;
}

export default function ProfileInformation(){
    //This can either be the user who clicked "My Profile"
    // or the results of a profile search
    //getData(user ID goes in here)
    /*return(
        <div>
        <h3>
            Username: {data.username}
        </h3>
        <h3>
            Age: {data.age}
        </h3>

        <h3> 
            Ethnicity: {data.ethnicity}
        </h3>

        <h3> 
            Height: {data.height}
        </h3>

        <h3> 
            Gender: {data.gender}
        </h3>

        <h3> 
            Favorite Workout: {data.favWorkout}
        </h3>
        </div>);*/
    return(<div>hello</div>);
    
}
