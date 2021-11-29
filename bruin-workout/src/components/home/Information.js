//this is supposed to represent the workout information when a workout is clicked.
//this is supposed to represent the workout information when a workout is clicked.
import React from 'react';

export default function Information(props) {
    let workout="";
    if(props.workout!==null){
        workout=props.workout.theName;
    }
    return (
        <div className="workout-information">
            Workout Information
            <br/>
            {workout}
        </div>
    )
}
