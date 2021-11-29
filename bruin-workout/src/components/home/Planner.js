//the planner showing the workouts
import React from "react";
import Grid from '@mui/material/Grid';
import PlannerItem, { plannerInfo } from './PlannerItem'
import { useState,useEffect } from "react";
import { useRef } from "react";
// import { Workouts } from '../Workout'


export default function Planner(props) {
    const workouts =props.workouts;
    let monday= plannerInfo("monday", workouts.monday.theName);

    return (
        <div>
         <PlannerItem info={monday}/>
        </div>
        // <div className="workout-planner">
        //     Planner
        // </div>
    );
}