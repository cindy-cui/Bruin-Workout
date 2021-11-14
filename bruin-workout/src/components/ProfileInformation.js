import { userData } from "./UserData";
import db from "./Database";
import { collection,doc, setDoc,getDoc } from "firebase/firestore";

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
    
    //This can either be the user who clicked "MY Profile"
    // or the results of a profile search
    async function getUserInfo(){// Async call so getDoc can finish getting its data from server
        const usersRef=collection(db,"users");
        try {
            const userRef= doc(usersRef,props.username);//get document of correct profile.
            const docReference = await getDoc(userRef);
            if(docReference.exists()){//retrieve data
                username=docReference.get(username);
                age=docReference.get(age);
                height=docReference.get(height);
                ethnicity=docReference.get(ethnicity);
                gender=docReference.get(gender);
                favWorkout=docReference.get(favWorkout);
        }
        else{}//could not retrieve data
         }
        catch{
        //could not get proper 
        }
        
        
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