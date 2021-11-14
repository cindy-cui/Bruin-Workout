import db from "./Database";
import {collection, doc,getDoc,updateDoc,arrayRemove} from "firebase/firestore";
import {Workout} from "./suggestions"

export default function Options(props){
    let workouts=[];
    const usersRef=collection(db,"users"); //get collection reference from "users"

    async function getUserInfo(){// Async call so getDoc can finish getting its data from server
        //before rest of program runs
        try {
            const userRef= doc(usersRef,props.username);//get document reference of correct profile.
            const user = await getDoc(userRef);
            if(user.exists()){//retrieve data
                workouts=user.get("workouts");
            }
            else{}//could not retrieve document snapshot
        }
        catch{
        //could not get document reference of username
        }
    }
    async function addWorkout(workout,day){//workout is Workout class type, day is string representing day of the week
        try {
            const userRef= doc(usersRef,props.username);//get document reference of correct profile.
            // let name = "workout."+ day + ".name";   //so for instance the string might be "workout.Monday.name"
            // let type= "workout."+ day + ".type";
            await updateDoc(userRef,{
               // name: workout.theName(),
               // type: workout.theType(),
            });
        }
        catch{
        //could not get document reference of username
        }
    }

    async function removeWorkout(workout,day){ //it's the same as add workout but replace the fields with ""
        try {
            const userRef= doc(usersRef,props.username);//get document reference of correct profile.
            // let name = "workout."+ day + ".name";   //so for instance the string might be "workout.Monday.name"
            // let type= "workout."+ day + ".type";
            await updateDoc(userRef,{
               // name: "",
               // type: "",
            });
        }
        catch{
        //could not get document reference of username
        }
    }

    getUserInfo(); 


    return(<div>
        Options
    </div>);
}
