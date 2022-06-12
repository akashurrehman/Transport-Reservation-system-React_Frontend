import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import AdminPanel from './AdminPanel';
import Topmenu from '../TopMenu';
import UserService from '../../Services/UserServices';
import { toast } from 'react-toastify';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(/images/card-3.jpg)',
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
    width:"50%"
  },
}));

export default function AdminLogIn() {
  const classes = useStyles();
  const[Email,setEmail]=React.useState("admin@admin.com");
  const[password,setPassword]=React.useState("admin");
  return (
      
    <Grid container component="main" className={classes.root}>
    <Topmenu />
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} squar style={{backgroundColor:"#4fc3f7"}}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            
          </Avatar>
          <Typography  component="h1" variant="h5" style={{color:"blue"}}>
            Welcome to Transport Booking System
          </Typography>
          <Typography component="h1" variant="h5" style={{color:"#3f51b5"}}>
            Sign in to your Admin Account
          </Typography>
          <form className={classes.form} Validate>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={Email}
              onChange={(e)=>{
                setEmail(e.target.value);
              }}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value);
              }}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
                onClick={(e)=>{
                console.log("Clicked Admin Login Btn")
                UserService.login(Email,password)
                .then((data)=>{
                  console.log(data);
                  window.location.href="/Admin/home/dashboard"
                  })
                .catch((err)=>{
                  toast.error(err.response.data, {
                  position: toast.POSITION.TOP_RIGHT
                });
                  console.log(err);
                });
                e.preventDefault();
              }}
            >
             
              Sign In to Account
              
            </Button>
            <Grid container>
              <Grid item xs>
                <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.forget}>
              Forget Password?
              </Button>
              <Link to="/" className={classes.link}>
                <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
             Back to Main Site
              
            </Button>
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}