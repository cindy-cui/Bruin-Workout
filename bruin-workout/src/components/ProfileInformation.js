import { userData } from "./UserData";
import db from "./Database";
import { collection, doc, getDoc,updateDoc } from "firebase/firestore";
import auth from "./Auth";
import { getData } from "./UserData";
import rockHeadshot from '../assets/rock-headshot.jpeg'
import literalRock from '../assets/literal-rock.jpg';


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
  

    getUserInfo();
    return(
        <div>
        <img src={literalRock} alt="" className="literal-rock1"/>
        <img src={literalRock} alt="" className="literal-rock2"/>
        <h2>
            JLin
             {/* {username} */}
        </h2>
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
