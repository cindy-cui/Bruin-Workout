import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { makeStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

const useStyles = makeStyles((theme) => {
    return {
        toolbar: theme.mixins.toolbar,        
    }
})

export default function Layout() {
  return (
    <div>
        <AppBar
            position="static"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar >
                <nav>
                    <Link
                        variant="button">
                        Profile
                    </Link>
                </nav>
            </Toolbar>
        </AppBar>
        <Container maxWidth="md" maxHeight="md">
            <Grid container direction="row">
                <Grid container item direction="column">
                    <Grid item xs={4}>
                        {/* Filter feature */}
                    </Grid>
                    <Grid item xs={4}>
                        {/* Planner */}
                    </Grid>
                </Grid>
                <Grid container item direction="column">
                    <Grid item xs={6}>
                    </Grid>
                    <Grid container item direction="row">
                        <Grid item xs={2}>
                        </Grid>
                        <Grid item xs={2}>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </div>
  );
}
