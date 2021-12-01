import { doc,updateDoc} from "firebase/firestore";
import db from "../Database";
import { getData } from "../UserData";
import { useEffect,useState } from "react";
import Planner from "./Planner";
import Grid from '@mui/material/Grid';
import React from "react";
import ProfileSearch from "./ProfileSearch";
import auth from "../Auth";
import { Workouts } from "../Workout";
import { useNavigate } from "react-router";
//the component that renders when a user clicks a workout from the list

export default function Options(props){//comments by Daniel Shim
    let navigate=useNavigate();    
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
           return doc(db,"users",auth.currentUser.uid);
        }
        catch{
            return null;
        }
    }
    

    async function addWorkout(workout,day){//workout is Workout class type (from Workout.js), day is string representing day of the week
        if (workout == null)
            return;
        const userRef= getDocument();  //userRef is a Document Reference for the user's information
        const workout_name = "workouts."+ day + ".name";   //so for instance the string might be "workout.monday.name"
        const workout_type= "workouts."+ day + ".type";
        if(userRef!==null){
            await updateDoc(userRef,{
                [workout_name]: workout.theName,
                [workout_type]: workout.theType,
            });
            updateWorkouts(workout,day);   //update our state variable copy. This is important because this is how
            //React knows to re-render the React component (because of the setState call used in updateWorkouts)
            navigate("/myprofile");
            navigate("/home");
            console.log(props.workoutSchedule);
        }
        else
            console.log("error");
    }

    async function removeWorkout(day){ //it's the same as add workout but replace the fields with ""
        const userRef= getDocument();  //userRef is a Document Reference for the user's information
        const workout_name = "workouts."+ day + ".name";   //so for instance the string might be "workout.monday.name"
        const workout_type= "workouts."+ day + ".type";
        if(userRef!==null){
            await updateDoc(userRef,{
                 [workout_name]: "",
                 [workout_type]: "",
            });
            updateWorkouts(null, day);
            navigate("/myprofile");
            navigate("/home");
        }
    }
    //this updates our local state variable workouts with the new workout
    function updateWorkouts(workout=null,day){//a null workout is a signal to remove the information by 
        //placing empty strings
        let addedName="",addedType="";
        if (workout!==null){ 
            addedName=workout.theName;
            addedType=workout.theType;
        }
        let newSchedule = props.workoutSchedule
        // console.log(newSchedule)
        // console.log(day)
        newSchedule[day].name = addedName
        newSchedule[day].type = addedType
        // console.log(newSchedule)
        props.setWorkoutSchedule(newSchedule);
    }

    let workout="";
    if(props.workout!==null){
        workout=props.workout.theName;
    }
    return(
        <div className="workout-options">
            <div>
            Workout Options
            <br/>
            {workout}
            </div>
            <button onClick={()=>{addWorkout(Workouts[props.index],"monday")}}> Add workout to monday</button>
            <button onClick={()=>{addWorkout(Workouts[props.index],"tuesday")}}> Add workout to tuesday</button>
            <button onClick={()=>{addWorkout(Workouts[props.index],"wednesday")}}> Add workout to wednesday</button>
            <button onClick={()=>{addWorkout(Workouts[props.index],"thursday")}}> Add workout to thursday</button>
            <button onClick={()=>{addWorkout(Workouts[props.index],"friday")}}> Add workout to friday</button>
            <button onClick={()=>{addWorkout(Workouts[props.index],"saturday")}}> Add workout to saturday</button>
            <button onClick={()=>{addWorkout(Workouts[props.index],"sunday")}}> Add workout to sunday</button>
            <button onClick={()=>{removeWorkout("monday")}}>Remove workout to monday</button>
            <button onClick={()=>{removeWorkout("tuesday")}}>Remove workout to tuesday</button>
            <button onClick={()=>{removeWorkout("wednesday")}}>Remove workout to wednesday</button>
            <button onClick={()=>{removeWorkout("thursday")}}>Remove workout to thursday</button>
            <button onClick={()=>{removeWorkout("friday")}}>Remove workout to friday</button>
            <button onClick={()=>{removeWorkout("saturda>")}}>Remove workout to saturday</button>
            <button onClick={()=>{removeWorkout("sunday")}}>Remove workout to sunday</button>
        </div>
        
    )
}
