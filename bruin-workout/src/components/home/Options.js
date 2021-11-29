import { doc,updateDoc} from "firebase/firestore";
import db from "../Database";
import { getData } from "../UserData";
import { useEffect,useState } from "react";
import Planner from "./Planner";
import Grid from '@mui/material/Grid';
import React from "react";
import ProfileSearch from "./ProfileSearch";
//the component that renders when a user clicks a workout from the list

export default function Options(props){//comments by Daniel Shim
    //declare a state variable called workouts, and fetch the user's workout plan from Firestore
    const[chosenWorkout,setChosenWorkout]=useState(props.workout);
    const [workouts,setWorkouts] = useState({
            monday:{name:"", type:""},
            tuesday:{name:"", type:""},
            wednesday:{name:"", type:""},
            thursday:{name:"", type:""},
            friday:{name:"", type:""},
            saturday:{name:"", type:""},
            sunday:{name:"", type:""},
    });
    useEffect( () => {
        async function fetchData(){
        var result=await getData(props.id,"workouts");    
        setWorkouts(result);      
        }
        fetchData();
        setChosenWorkout(props.workout);
     },[props.id,props.workout]);
    //the state variable workouts should now be filled in with data from Firestore
    // use dot notation to retrieve the string of the information you need. For example,
    // workouts.monday.name should return a string representing the name of Monday's workout

    //IMPORTANT NOTE
    //these two functions, addWorkout and removeWorkout, are for a coder who needs to implement the 
    //feature when a user needs to add/remove a workout from the planner
    //read the usage notes at the head of each function
    //-Daniel Shim
    function getDocument(){
        try{
           return userRef=doc(db,"users",props.id); 
        }
        catch{
            return null;
        }
    }
    const userRef= getDocument(); //userRef is a Document Reference for the user's information

    async function addWorkout(workout,day){//workout is Workout class type (from Workout.js), day is string representing day of the week
        const workout_name = "workout."+ day + ".name";   //so for instance the string might be "workout.monday.name"
        const workout_type= "workout."+ day + ".type";
        if(userRef!==null){
            await updateDoc(userRef,{
                [workout_name]: workout.theName(),
                [workout_type]: workout.theType(),
            });
            updateWorkouts(workout,day);   //update our state variable copy. This is important because this is how
            //React knows to re-render the React component (because of the setState call used in updateWorkouts)
        }
    }

    async function removeWorkout(day){ //it's the same as add workout but replace the fields with ""
        const workout_name = "workout."+ day + ".name";   //so for instance the string might be "workout.monday.name"
        const workout_type= "workout."+ day + ".type";
        if(userRef!==null){
            await updateDoc(userRef,{
                 [workout_name]: "",
                 [workout_type]: "",
            });
            updateWorkouts(day);
        }
    }
    //this updates our local state variable workouts with the new workout
    function updateWorkouts(workout=null,day){//a null workout is a signal to remove the information by 
        //placing empty strings
        let addedName="",addedType="";
        if (workout!==null){ 
            addedName=workout.theName();
            addedType=workout.theType();
        }   
        setWorkouts({
            [day]:{
                name:addedName,type: addedType,
            }
        });
    }
    let workout="";
    if(props.workout!==null){
        workout=props.workout.theName;
    }
    return(
        <div>
            <div className="workout-options">
            Workout Options
            <br/>
            {workout}
            </div>
            <React.Fragment>
            <Grid container item direction="column">    
                <Grid item>
                     <Planner workouts={workouts}/>
                </Grid>                
            </Grid>
            </React.Fragment>
        </div>
        
    )
}
