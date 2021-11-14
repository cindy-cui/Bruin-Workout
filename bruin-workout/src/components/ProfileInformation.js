import { userData } from "./UserData";
import db from "./Database";
import { collection, doc, getDoc,updateDoc } from "firebase/firestore";
import auth from "./Auth";


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



export default function ProfileInformation(props){
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
            const userRef= doc(usersRef,props.username);//get document reference of correct profile.
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
    async function updateProfile(props){ //TODO: Implement
        //may need to implement some checks regarding
        //the new input a user types

        await updateDoc()

    }

    getUserInfo();
    return(
        <div>
        <h3>
            Username: {username}
        </h3>
        <h3>
            Age: {age}
        </h3>

        <h3> 
            Ethnicity: {ethnicity}
        </h3>

        <h3> 
            Height: {height}
        </h3>

        <h3> 
            Gender: {gender}
        </h3>

        <h3> 
            Favorite Workout: {favWorkout}
        </h3>
        </div>);
}
