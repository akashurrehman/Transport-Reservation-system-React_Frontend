import { Avatar, Button, CssBaseline, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import Footer from "./Footer";
import { makeStyles } from '@material-ui/core/styles';
import Topmenu from './TopMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    marginTop:"1.5rem"
  },
  image: {
    backgroundImage: 'url(/images/help.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    backgroundImage: 'url(/images/Lgo.png)',
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  forget:{
    width:"25%"
  },
}));

const ContactUs = () => {
    const classes=useStyles();
    return ( 
    <div>
        <Topmenu />
        <Grid container spacing={8} style={{marginTop:"1.9rem"}}>
        <Grid items xs={12}>
        <Typography variant="h4" style={{backgroundColor:"#03a9f4",padding:"1.9rem", textAlign:"left",color:"#fafafa",marginTop:"1.5rem",marginBottom:"2.5rem"}}>Contact Us!</Typography>
        </Grid>
        </Grid>
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={4} md={6} className={classes.image} />

      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} rounded>
        <div className={classes.paper}>
          
          <Typography  component="h1" variant="h5" style={{color:"blue"}}>
            Welcome to Online Transport Booking
          </Typography>
        <Grid item md={4}>
            <Typography component="h1" variant="h5" style={{color:"#f50057",textAlign:"center",marginTop:"2.5rem"}}>
            Address
          </Typography>
            <address>4th Floor, 12 Main Blvd Gulberg, Block K Gulberg 2, Lahore, Punjab 54000</address>
            
            <Typography component="h1" variant="h5" style={{color:"#f50057",textAlign:"center"}}>
            Email Me
          </Typography>
            <button onClick={() => window.location = 'mailto:akashurrehman456@gmail.com'}>akashurrehman456@gmail.com</button>
        </Grid>
        </div>
      </Grid>
    </Grid>

        <Footer />
    </div>
     );
}
 
export default ContactUs;