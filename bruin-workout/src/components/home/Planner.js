//the planner showing the workouts
import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PlannerItem, { plannerInfo } from './PlannerItem'


export default function Planner(props) {
    const workoutSchedule = props.workoutSchedule;
    console.log(workoutSchedule)
    let monday = plannerInfo("monday", workoutSchedule.monday.name);
    let tuesday = plannerInfo("tuesday", workoutSchedule.tuesday.name);
    let wednesday = plannerInfo("wednesday", workoutSchedule.wednesday.name);
    let thursday = plannerInfo("thursday", workoutSchedule.thursday.name);
    let friday = plannerInfo("friday", workoutSchedule.friday.name);
    let saturday = plannerInfo("saturday", workoutSchedule.saturday.name);
    let sunday = plannerInfo("sunday", workoutSchedule.sunday.name);

    return (
        <Grid container direction="row" >
            <Grid item>
                <PlannerItem info={monday} />
            </Grid>
            <Grid item>
                <PlannerItem info={tuesday} />
            </Grid>
            <Grid item>
                <PlannerItem info={wednesday} />
            </Grid>
            <Grid item>
                <PlannerItem info={thursday} />
            </Grid>
            <Grid item>
                <PlannerItem info={friday} />
            </Grid>
            <Grid item>
                <PlannerItem info={saturday} />
            </Grid>
            <Grid item>
                <PlannerItem info={sunday} />
            </Grid>
        </Grid>
    );
}