import { Grid } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useParams} from "react-router-dom";
import axios from 'axios';
import AdminNavbar from './AdminNavbar';

const useStyles = makeStyles((theme) => ({
  field:{
    marginLeft:"1.9rem",
    marginTop:"1.5rem",
  },
  btncls:{
      display:"center",
  }
}));

const UpdateUserRegistration = () => {
    const classes = useStyles();
    const { id } = useParams(); 
    let navigate = useNavigate();
    const [FirstName,setFirstName] =React.useState("");
    const [LastName,setLastName] =React.useState("");
    const [PhoneNumber,setPhoneNumber] =React.useState("");
    const [Age,setAge] =React.useState(0);
    const [Email,setEmail] =React.useState("");
    console.log(id);
    React.useEffect(
        ()=>{axios.get(`https://fa19bse112apibackend.herokuapp.com/API/users/${id}`).then(res => {  
                    console.log(res);  
                    console.log(res.data);
                setFirstName(res.data.FirstName);
                setLastName(res.data.LastName);
                setPhoneNumber(res.data.PhoneNumber);
                setAge(res.data.Age);
                setEmail(res.data.Email);
            });
    }, []);
    return ( 
        <div>

        <AdminNavbar />
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <h1 style={{marginTop:"1.9rem"}}>Update User Data</h1>
            </Grid>
            <Grid item xs={12}>
                
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <TextField required id="standard-required" label="First Name" value={FirstName} onChange={(e) =>{
                    setFirstName(e.target.value);
                }} className={classes.field}/>
                <TextField required id="standard-required" label="Last Name" value={LastName} onChange={(e) =>{
                    setLastName(e.target.value);
                }} className={classes.field}/>
                <TextField required id="standard-required" label="Phone Number" value={PhoneNumber} onChange={(e) =>{
                    setPhoneNumber(e.target.value);
                }} className={classes.field}/>
                <TextField required id="standard-required" label="Age" value={Age} onChange={(e) =>{
                    setAge(e.target.value);
                }} className={classes.field}/>
                <TextField required id="standard-required" label="Email" value={Email} onChange={(e) =>{
                    setEmail(e.target.value);
                }} className={classes.field}/>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
                <Button variant="contained" color="primary" onClick={(e)=>{
                    axios.put(`https://fa19bse112apibackend.herokuapp.com/API/users/${id}`, {
                        FirstName,LastName,PhoneNumber,Age,Email
                    })
                    .then(function (response) {
                        console.log(response);
                        navigate('/Admin/home/ManageUsers')
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }}>
                     Add User Record
            </Button>
            </Grid>
        </Grid>
        </div>
     );
}
 
export default UpdateUserRegistration;