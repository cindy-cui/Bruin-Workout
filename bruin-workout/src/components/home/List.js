//the list of workouts
import { getThemeProps } from '@mui/system';
import React from 'react';
import Options from './Options';
import { useState } from 'react';
import Information from './Information';
import Filters from './Filters';

export default function List(props) {

    async function removeWorkouts(id) {
        let workouts = document.getElementById('workout-list-title').children;
        console.log(workouts);
        // loop through the workout list
        for (let i = 0; i < workouts.length; i++) {
            if (id == 'reset') {
                workouts[i].display = "block";
                continue;
            }
            let workoutType = workouts[i].className;
            // set display to none on elements that aren't push workouts and elements that aren't the title
            if (workoutType != id && workouts[i].id != "workout-list-title") {
                workouts[i].display = "none";
            }
        }
    }
    
    return (
       <div>
        <div className="workout-list">
            <ul id="workout-unordered-list">
                <div id="workout-list-title">Workouts</div>
                <li className="push" onClick={()=>{props.handleClick(0)}}>Bench Press</li>
                <li className="push" onClick={()=>{props.handleClick(1)}}>Chest Fly</li>
                <li className="push" onClick={()=>{props.handleClick(2)}}>Dips</li>
                <li className="push" onClick={()=>{props.handleClick(3)}}>Tricep Extension</li>
                <li className="push" onClick={()=>{props.handleClick(4)}}>Skull Crusher</li>
                <li className="push" onClick={()=>{props.handleClick(5)}}>Tricep Dips</li>
                <li className="push" onClick={()=>{props.handleClick(6)}}>Tricep Pulldown</li>
                <li className="pull" onClick={()=>{props.handleClick(7)}}>Rows</li>
                <li className="pull" onClick={()=>{props.handleClick(8)}}>Lat Pulldowns</li>
                <li className="pull" onClick={()=>{props.handleClick(9)}}>Bent Over Row</li>
                <li className="pull" onClick={()=>{props.handleClick(10)}}>Pull Ups</li>
                <li className="pull" onClick={()=>{props.handleClick(11)}}>Twenty Ones</li>
                <li className="pull" onClick={()=>{props.handleClick(12)}}>Hammer Curls</li>
                <li className="pull" onClick={()=>{props.handleClick(13)}}>Incline Dumbell Curls</li>
                <li className="pull" onClick={()=>{props.handleClick(14)}}>Shrugs</li>
                <li className="pull" onClick={()=>{props.handleClick(15)}}>Shoulder Press</li>
                <li className="legs" onClick={()=>{props.handleClick(16)}}>Squat</li>
                <li className="legs" onClick={()=>{props.handleClick(17)}}>Deadlift</li>
                <li className="legs" onClick={()=>{props.handleClick(18)}}>Split Squat</li>
                <li className="legs" onClick={()=>{props.handleClick(19)}}>Leg Curl Machine</li>
                <li className="legs" onClick={()=>{props.handleClick(20)}}>Leg Press Machine</li>
                <li className="legs" onClick={()=>{props.handleClick(21)}}>Goblet Squat</li>
                <li className="legs" onClick={()=>{props.handleClick(22)}}>Running</li>
                <li className="legs" onClick={()=>{props.handleClick(23)}}>Basketball</li>
            </ul>
        </div>
        {/* <div>
            <Information workout={chosenWorkout}/>
            <br/>
            <Options workout={chosenWorkout}/>
        </div> */}
        </div>
   )
}
