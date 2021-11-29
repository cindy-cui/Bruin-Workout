//the list of workouts
import { getThemeProps } from '@mui/system';
import React from 'react';
import { Workouts } from '../Workout';
import Options from './Options';
import { useState } from 'react';
import Information from './Information';
export default function List(props) {
    const [chosenWorkout,setChosenWorkout]=useState(null);
    async function handleClick(index){
        console.log(Workouts[index].theName);
        setChosenWorkout(Workouts[index]);
    }
   return (
       <div>
        <div className="workout-list">
            <ul id="workout-unordered-list">
                <div id="workout-list-title">Workouts</div>
                <li onClick={()=>{handleClick(0)}}>Bench Press</li>
                <li onClick={()=>{handleClick(1)}}>Chest Fly</li>
                <li onClick={()=>{handleClick(2)}}>Dips</li>
                <li onClick={()=>{handleClick(3)}}>Tricep Extension</li>
                <li onClick={()=>{handleClick(4)}}>Skull Crusher</li>
                <li onClick={()=>{handleClick(5)}}>Tricep Dips</li>
                <li onClick={()=>{handleClick(6)}}>Tricep Pulldown</li>
                <li onClick={()=>{handleClick(7)}}>Rows</li>
                <li onClick={()=>{handleClick(8)}}>Lat Pulldowns</li>
                <li onClick={()=>{handleClick(9)}}>Bent Over Row</li>
                <li onClick={()=>{handleClick(10)}}>Pull Ups</li>
                <li onClick={()=>{handleClick(11)}}>Twenty Ones</li>
                <li onClick={()=>{handleClick(12)}}>Hammer Curls</li>
                <li onClick={()=>{handleClick(13)}}>Incline Dumbell Curls</li>
                <li onClick={()=>{handleClick(14)}}>Shrugs</li>
                <li onClick={()=>{handleClick(15)}}>Shoulder Press</li>
                <li onClick={()=>{handleClick(16)}}>Squat</li>
                <li onClick={()=>{handleClick(17)}}>Deadlift</li>
                <li onClick={()=>{handleClick(18)}}>Split Squat</li>
                <li onClick={()=>{handleClick(19)}}>Leg Curl Machine</li>
                <li onClick={()=>{handleClick(20)}}>Leg Press Machine</li>
                <li onClick={()=>{handleClick(21)}}>Goblet Squat</li>
                <li onClick={()=>{handleClick(22)}}>Running</li>
                <li onClick={()=>{handleClick(23)}}>Basketball</li>
            </ul>
        </div>
        <div>
            <Information workout={chosenWorkout}/>
            <br/>
            <Options workout={chosenWorkout}/>
        </div>
        </div>
   )
}
