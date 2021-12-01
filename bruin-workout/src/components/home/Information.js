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
            {workout} <br/>
        <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
            frameborder='0'
            allow='autoplay; encrypted-media'
            allowfullscreen
            title='video'
        />
        </div>
    )
}
