import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Footer from '../Footer'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Topmenu from '../TopMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(/images/Login.webp)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(4, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));


const TravellerDetails = () => {
    const classes=useStyles();
    return ( 
        <div>
        <Topmenu />
        <Grid container spacing={8} style={{marginTop:"1.9rem"}}>
        <Grid items xs={12}>
        <Typography variant="h4" style={{backgroundColor:"#03a9f4",padding:"1.9rem", textAlign:"left",color:"#fafafa",marginTop:"1.5rem",marginBottom:"2.5rem"}}>Bus CheckOut</Typography>
        </Grid>
        </Grid>
         <React.Fragment>
    <Grid container spacing={3}>
        <Grid item xs={12} sm={7}  className={classes.paper} component={Paper} rounded>
            <Typography variant="h6" gutterBottom>
                Confirm Bus Details

            </Typography>
            <Typography variant="h6" gutterBottom>
                Traveller Details
            </Typography>
            <Typography variant="p" gutterBottom>
                As per the guidelines of NCOC and Government of Pakistan, any passenger above the age of 18 
                needs to have at least 1 dose of covid vaccine in order to travel by bus and airline.</Typography>
            <hr />
        <Grid item xs={12}>
        <TextField style={{width:"48%", marginRight:"1.5rem"}}
            variant="outlined"
            margin="normal"
            fullWidth
            required
            id="Name"
            name="Name"
            label="Customer name"
            autoComplete="given-name"
            autofocus
          />
          
          <TextField style={{width:"49%"}}
            variant="outlined"
            margin="normal"
            required
            id="cnic"
            name="cnic"
            label="Customer CNIC No"
            autoComplete="Customer CNIC"
          />
          <TextField style={{width:"15%", marginRight:"1.5rem"}}
             variant="outlined"
            margin="normal"
            id="age"
            name="age"
            label="Customer Age"
            autoComplete="Age"
          />
          <TextField style={{width:"40%",marginRight:"1.0rem"}}
            variant="outlined"
            margin="normal"
            required
            id="Phoneno"
            name="Phoneno"
            label="Phone No"
            autoComplete="Phone Number"
          />
          <TextField style={{width:"39%"}}
            variant="outlined"
            margin="normal"
            required
            id="email"
            name="email"
            label="Email Address"
            autoComplete="Email Address"
          />
        </Grid>
        </Grid>
    <Grid item xs={12} sm={5} className={classes.paper} component={Paper} rounded>
    <Typography variant="h5" gutterBottom>
                Fair Details
    </Typography>

    <Typography variant="h6" gutterBottom>
                Total Amount
    </Typography>
    <Typography variant="h6" gutterBottom>
                Payable
    </Typography>
            <Button style={{width:"11.5rem"}}
                            type="submit"
                            variant="contained"
                            color="primary">
                            CheckOut
        </Button>
        <Grid item xs={12}>
        </Grid>

      </Grid>
    </Grid>
    </React.Fragment>
            <Footer />
        </div>
     );
}
 
export default TravellerDetails;