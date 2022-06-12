import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Topmenu from './../TopMenu';
import UserService from '../../Services/UserServices';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color:"green",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  let navigate = useNavigate();
  const[FirstName,setFirstName]=React.useState("");
  const[LastName,setLastName]=React.useState("");
  const[PhoneNumber,setPhoneNumber]=React.useState("");
  const[Age,setAge]=React.useState(0);
  const[Email,setEmail]=React.useState("haiderrehman2568@gmail.com");
  const[password,setpassword]=React.useState("test");

  return (
    <Container component="main" maxWidth="xs">
    <Topmenu />
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography style={{color:"blue"}} component="h1" variant="h5" justifyContent="flex-center">
          Welcome to Transport Booking
        </Typography>
        <Typography component="h1" variant="h5" style={{color:"#ad1457"}}>
          Sign up Your Account
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
          
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={FirstName}
                onChange={(e)=>{
                setFirstName(e.target.value);
              }}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                autoComplete="lastname"
                value={LastName}
                onChange={(e)=>{
                setLastName(e.target.value);
              }}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fNo"
                name="phoneno"
                variant="outlined"
                required
                fullWidth
                id="phoneNo"
                label="Phone Number"
                value={PhoneNumber}
                onChange={(e)=>{
                setPhoneNumber(e.target.value);
              }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="age"
                label="Age"
                name="Age"
                autoComplete="Age"
                value={Age}
                onChange={(e)=>{
                setAge(e.target.value);
              }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={Email}
                onChange={(e)=>{
                setEmail(e.target.value);
              }}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e)=>{
                setpassword(e.target.value);
              }}
                value={password}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Accepting all Refund Policy,Ticket Policies,Terms and Conditions."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
           onClick={(e)=>{
                console.log("Clciked Sign Up Btn")
                UserService.register(FirstName,LastName,Age,PhoneNumber,Email,password)
                .then((data)=>{
                  console.log(data);
                   toast.success("Successfully Account Created !", {
                      position: toast.POSITION.TOP_CENTER
                    });
                  })
                .catch((err)=>{
                  console.log(err);
                  toast.error(err.response.data, {
                  position: toast.POSITION.TOP_RIGHT
                });
                });
                e.preventDefault();
              }}
          >
            Sign Up
          </Button>
          <br/>
          <br/>
          <Grid container justifyContent="flex-start">
            <Grid item>
                Already have an account?
            </Grid>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={(x)=>{
              x.preventDefault();
            console.log("in Login Click Button");
            window.location.href="/Login"
            }}
            className={classes.submit}>
            Log In
          </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
}