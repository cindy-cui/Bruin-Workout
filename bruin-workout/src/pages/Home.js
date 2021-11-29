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
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import ProfileSearch from '../components/home/ProfileSearch';
import List from '../components/home/List';
import Information from '../components/home/Information';
import Options from '../components/home/Options';
import Planner from '../components/home/Planner';
import Filters from '../components/home/Filters';

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
                <List />
            </Grid>
            <Grid item>
                <Filters />
            </Grid>
        </React.Fragment>
    );
}

function ScheduleAndSubWindows() {
    return(
        <React.Fragment>
            <Grid container item direction="column">
                <Grid item>
                    <ProfileSearch/>
                </Grid>          
                <Grid item>
                    <Planner /> 
                </Grid>                
            </Grid>
            <Grid container item direction="row" xs={4} sm={4}  md={4} spacing={10}>
                <Grid item>
                    <Information />
                </Grid>
                <Grid item>
                    <Options />                           
                </Grid>
            </Grid>
        </React.Fragment>
    );
}


export default function Home(props){ //props.id stores the current user's id
    const classes = useStyles()
    
    let navigate=useNavigate();
    //if user is not logged in, send user back to login page.
    useEffect(
        ()=>{
            if(auth.currentUser===null){
                navigate("/login");
            }
        }
    )

    function display(){
        let user=auth.currentUser;
        if(user===null)
            return "";
        else{
            console.log("User with username", user.displayName,"and ID ",user.uid," is logged in.");
            return user.displayName;
        }
    }    

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
