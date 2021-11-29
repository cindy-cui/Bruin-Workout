import React from "react";
import { Card, CardHeader, CardMedia, CardContent } from '@mui/material';
import { Container, Typography } from "@mui/material";

export function plannerInfo(day, workout) {
    return {
        day,
        workout
    }
}

export default function PlannerItem({ info }) {
    return (
        // <Container>
            <Card variant="outlined" className="planner-item">
                {/* <Typography variant="h7">
                    {info.day}
                </Typography> */}
                <CardHeader title={ info.day } />
                {/* <CardMedia
                    component="img"
                    height="100"
                    image={ info.workout.img }
                    alt={ info.workout.alt }
                /> */}
                <CardContent>
                    <Typography>
                        { info.workout }
                    </Typography>
                </CardContent>
            </Card>
        // </Container>
    )
}
