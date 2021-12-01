//the workout filters when a user is choosing a workout
import React from 'react';

export default function Filters() {

    function removeWorkouts(id) {
        console.log(id);
        // let workouts = document.getElementById('workout-list-title').children;
        // console.log(workouts);
        // // loop through the workout list
        // for (let i = 0; i < workouts.length; i++) {
        //     if (id == 'reset') {
        //         workouts[i].display = "block";
        //         continue;
        //     }
        //     let workoutType = workouts[i].className;
        //     // set display to none on elements that aren't push workouts and elements that aren't the title
        //     if (workoutType != id && workouts[i].id != "workout-list-title") {
        //         workouts[i].display = "none";
        //     }
        // }
    }

    return (
        <div className="workout-filters">
            <ul className="filter-list">
                <div id="filter-title">Filters</div>
                <li onClick={removeWorkouts('push')}>Push</li>
                <li onClick={removeWorkouts('pull')}>Pull</li>
                <li onClick={removeWorkouts('legs')}>Legs</li>
                <li onClick={removeWorkouts('reset')}>Reset</li>
            </ul>
        </div>
    )
}