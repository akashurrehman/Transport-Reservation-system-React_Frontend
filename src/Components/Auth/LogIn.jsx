import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import UserService from '../../Services/UserServices';
import { makeStyles } from '@material-ui/core/styles';
import Topmenu from './../TopMenu';
import { toast } from 'react-toastify';

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

export default function LogIn() {
  const classes = useStyles();
  const[Email,setEmail]=React.useState("user@gmail.com");
  const[password,setPassword]=React.useState("user");
  return (
    <Grid container component="main" className={classes.root}>
    <Topmenu />
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            
          </Avatar>
          <Typography  component="h1" variant="h5" style={{color:"blue"}}>
            Welcome to Transport Booking
          </Typography>
          <Typography component="h1" variant="h5" style={{color:"#f50057"}}>
            Sign in to your Account
          </Typography>
          <form className={classes.form} Validate>
            <TextField
              variant="outlined"
              margin="normal"
              required
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
              required
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
                console.log("Clciked Login Btn")
                UserService.login(Email,password)
                .then((data)=>{
                  console.log(data);
                  window.location.href="/"
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

              <Link to="/forgetpassword">
                <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.forget}>
              Forget Password?
              </Button>
              </Link>
              </Grid>
            </Grid>
              <Grid item>
              <br />
              
              {"Don't have an account?"}
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={(x)=>{
              x.preventDefault();
            console.log("in Login Click Button");
            window.location.href="/SignUp"
            }}
            className={classes.submit}>
            Sign Up
          </Button>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}