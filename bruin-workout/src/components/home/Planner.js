//the planner showing the workouts
import React from "react";
import Grid from '@mui/material/Grid';
import PlannerItem, { plannerInfo } from './PlannerItem'
// import { Workouts } from '../Workout'

let Workouts = { name: "bench press" }
let sample = plannerInfo("Monday", Workouts)
export default function Planner() {
    return (
        <Grid container direction="row">
            <Grid item>
                <PlannerItem info={sample} />
            </Grid>
            <Grid item>
                <PlannerItem info={sample} />
            </Grid>
            <Grid item>
                <PlannerItem info={sample} />
            </Grid>
            <Grid item>
                <PlannerItem info={sample} />
            </Grid>
            <Grid item>
                <PlannerItem info={sample} />
            </Grid>
            <Grid item>
                <PlannerItem info={sample} />
            </Grid>
            <Grid item>
                <PlannerItem info={sample} />
            </Grid>
        </Grid>
        // <div className="workout-planner">
        //     Planner
        // </div>
    )
}