//this is supposed to represent the workout information when a workout is clicked.
//this is supposed to represent the workout information when a workout is clicked.
import React from 'react';
import { Workouts } from '../Workout';
export default function Information(props) {
    let workout="";
    let workout_url="";
    if(props.workout!==null){
        workout=props.workout.theName;
        workout_url = props.workout.theUrl;
    }
    let suggestions="";
    if (props.workout !== null) {
        for(let i = 0; i < Workouts.length; i++){
            if(props.workout.theType == Workouts[i].theType && props.workout !== Workouts[i]){
                let addString = Workouts[i].theName + ", ";
                
                suggestions += addString;
            }
        }
        
            suggestions = suggestions.substr(0, suggestions.length - 2);
        
    }

    return (
        <div className="workout-information">
            Workout Information
            <br/>
            {workout} <br/>
            <iframe 
            width="560" 
            height="315" 
            src={workout_url} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            <div>
                <p>Similar Workouts: {suggestions}</p>
            </div>
        </div>
    )
}
