import { Button, Card, CardActions, CardContent, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles} from "@material-ui/styles";
import AdminNavbar from './AdminNavbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
  root: {
    minWidth: 200,
    Color:"#00bcd4",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },

  title: {
    fontSize: 16,
    paddingTop:"1.9rem",
    color:"#fafafa",
  },
  pos: {
    marginBottom: 12,
  },
  btn:{
      color:"#009688",
      marginBottom:"1.6rem",
      width:"25%",
  }
});
const AdminDashboard = () => {

    const classes=useStyles();
    const[transportdata,setProducts] =React.useState([]);
    const getdata =() => {axios.get("https://fa19bse112apibackend.herokuapp.com/API/TransportRecord").then((response) =>{
            setProducts(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }
    React.useEffect(getdata,[]);
    console.log(transportdata.length);
    const[usersdata,setusers] =React.useState([]);
    const getuserdata =() => {axios.get("https://fa19bse112apibackend.herokuapp.com/API/users").then((response) =>{
            setusers(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }
    React.useEffect(getuserdata,[]);
    const[customerdata,setcustomer] =React.useState([]);
    const getcustomerdata =() => {axios.get("https://fa19bse112apibackend.herokuapp.com/API/users").then((response) =>{
            setcustomer(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }
    React.useEffect(getcustomerdata,[]);
    console.log(getcustomerdata.length);
    return ( 
            <div>
            <AdminNavbar/>
            <Grid items xs={12}>
                <Typography variant="h4" style={{backgroundColor:"#757575",width:"100%",padding:"1.9rem", textAlign:"left",color:"#fafafa",marginTop:"1.5rem", marginLeft:"0px"}}>Welcome Back Admin!</Typography>
            </Grid>
             <Grid
     
            container
            spacing={4}
            className={classes.gridContainer}
            justify="flex-start"
            style={{ marginTop: "80px" }}
    >
            <Grid item xs={12} sm={6} md={4}>
            <Paper variant="outlined" square />
              <Card className={classes.root} style={{backgroundColor:"#ff1744"}} >
                <CardContent>
                  <Typography
                    className={classes.title}
                    gutterBottom>
                    Total Customers
                  </Typography>
                 <Typography
                    className={classes.title}
                    gutterBottom>
                    {customerdata.length}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button  variant="contained" color="warning" className={classes.btn}>View All</Button>
                </CardActions>
              </Card>
              
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Paper variant="outlined" square />
              <Card className={classes.root} style={{backgroundColor:"#42a5f5"}} >
                <CardContent>
                  <Typography
                    className={classes.title}
                    gutterBottom>
                    Total Registered Users {usersdata.length}
                  </Typography>
                    <Typography
                    gutterBottom>
                   {usersdata.length}
                  </Typography>
                  
                </CardContent>
                <CardActions>
                <Link to="/Admin/home/ManageUsers" >
                  <Button  variant="contained" color="warning" className={classes.btn}>View All</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Paper variant="outlined" square />
              <Card className={classes.root} style={{backgroundColor:"#26a69a"}} >
                <CardContent>
                  
                  <Typography
                    className={classes.title}
                    gutterBottom
                  >
                    Total Buses 
                  </Typography>
                  
                  <Typography
                    gutterBottom>
                   {transportdata.length}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to="/Admin/home/ManageBuses" >
                  <Button  variant="contained" color="warning" className={classes.btn}>View All Buses</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            </Grid>
            </div>
     );
}
 
export default AdminDashboard;