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
                <CardHeader titleTypographyProps={{ variant:'h7' }} title={ info.day } />
                <CardContent>
                    <Typography variant="h8">
                        { info.workout }
                    </Typography>
                </CardContent>
            </Card>
        // </Container>
    )
}
