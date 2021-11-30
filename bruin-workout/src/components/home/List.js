//the list of workouts
import { getThemeProps } from '@mui/system';
import React from 'react';
import Options from './Options';
import { useState } from 'react';
import Information from './Information';

export default function List(props) {
    return (
       <div>
        <div className="workout-list">
            <ul id="workout-unordered-list">
                <div id="workout-list-title">Workouts</div>
                <li onClick={()=>{props.handleClick(0)}}>Bench Press</li>
                <li onClick={()=>{props.handleClick(1)}}>Chest Fly</li>
                <li onClick={()=>{props.handleClick(2)}}>Dips</li>
                <li onClick={()=>{props.handleClick(3)}}>Tricep Extension</li>
                <li onClick={()=>{props.handleClick(4)}}>Skull Crusher</li>
                <li onClick={()=>{props.handleClick(5)}}>Tricep Dips</li>
                <li onClick={()=>{props.handleClick(6)}}>Tricep Pulldown</li>
                <li onClick={()=>{props.handleClick(7)}}>Rows</li>
                <li onClick={()=>{props.handleClick(8)}}>Lat Pulldowns</li>
                <li onClick={()=>{props.handleClick(9)}}>Bent Over Row</li>
                <li onClick={()=>{props.handleClick(10)}}>Pull Ups</li>
                <li onClick={()=>{props.handleClick(11)}}>Twenty Ones</li>
                <li onClick={()=>{props.handleClick(12)}}>Hammer Curls</li>
                <li onClick={()=>{props.handleClick(13)}}>Incline Dumbell Curls</li>
                <li onClick={()=>{props.handleClick(14)}}>Shrugs</li>
                <li onClick={()=>{props.handleClick(15)}}>Shoulder Press</li>
                <li onClick={()=>{props.handleClick(16)}}>Squat</li>
                <li onClick={()=>{props.handleClick(17)}}>Deadlift</li>
                <li onClick={()=>{props.handleClick(18)}}>Split Squat</li>
                <li onClick={()=>{props.handleClick(19)}}>Leg Curl Machine</li>
                <li onClick={()=>{props.handleClick(20)}}>Leg Press Machine</li>
                <li onClick={()=>{props.handleClick(21)}}>Goblet Squat</li>
                <li onClick={()=>{props.handleClick(22)}}>Running</li>
                <li onClick={()=>{props.handleClick(23)}}>Basketball</li>
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
