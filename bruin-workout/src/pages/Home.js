import NavigationBar from '../components/NavigationBar';
import { Link } from "react-router-dom";
import auth from '../components/Auth';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { makeStyles } from '@material-ui/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import styles from '../styles/styles'
import { styled } from '@mui/material/styles';

const useStyles = makeStyles(styles)

// Item is a placeholder for the actual components. Will be useful as a visual aid to see how 
// the main page is laid out. 
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function WorkoutListAndFilter() {
    return(
        <React.Fragment>
            <Grid item>
                {/* Filter feature */}
                <Item>Item</Item>
            </Grid>
            <Grid item>
                {/* Planner */}
                <Item>Item</Item>
            </Grid>
        </React.Fragment>
    );
}

function ScheduleAndSubWindows() {
    return(
        <React.Fragment>
            <Grid item>
                <Item>Item</Item>                            
            </Grid>
            <Grid container item direction="row" xs={4} sm={4}  md={4} spacing={10}>
                <Grid item>
                    <Item>Item</Item>
                </Grid>
                <Grid item>
                    <Item>Item</Item>                            
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default function Home(props){ //props.id stores the current user's id
    function display(){
        let user=auth.currentUser;
        if(user===null)
            return "";
        else{
            console.log(user.uid);
            return user.displayName;
        } 
        
    }
    // return(<div>
    //     <NavigationBar page="Home"/>
    //     {/* <h1>
    //         Welcome, {display()}
    //     </h1> */}
    // </div>);
    const classes = useStyles()
    return (
        <React.Fragment>
            <AppBar
                position="static"
                elevation={0}>
                <Toolbar >
                    <Typography variant="h5" color="inherit" sx={{ flexGrow: 1 }}>
                        Face Off
                    </Typography>
                    <nav>
                        <Link to="/myprofile">
                            <Button variant="text" color="inherit">Profile</Button>
                        </Link>
                    </nav>
                </Toolbar>
            </AppBar>
            <Box sx={{ marginTop: 3 }}>
                <Typography variant="h7" color="inherit">
                    Welcome, {display()}
                </Typography>
            </Box>
            <Box t={10} l={10} className={classes.container}>
                <Grid container columnSpacing={10} columns={11}>
                    <Grid container item direction="column" xs={4} sm={4} md={4} lg={4} rowSpacing={3}>
                        <WorkoutListAndFilter />
                    </Grid>
                    <Grid container item direction="column" xs={7} sm={7} md={7} rowSpacing={3}>
                        <ScheduleAndSubWindows/>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
  );
}
