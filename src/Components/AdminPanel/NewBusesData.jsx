import { Grid } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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

const NewBusesData = () => {
    const classes = useStyles();
    let navigate = useNavigate();
    const [BusCompany,setBusCompany] =React.useState("");
    const [BusNumber,setBusNumber] =React.useState("");
    const [Class,setBusClass] =React.useState("");
    const [SpecialOffer,setSpecialOffer]=React.useState("");
    const [Wifi,setWifi]=React.useState("");
    const [TotalSeats,setTotalSeats]=React.useState(0);
    const [Route1,setRoute1]=React.useState("");
    const [Route2,setRoute2]=React.useState("");
    const [AvgFair,setAvgFair]=React.useState("");
    return ( 
        <div>
        <AdminNavbar/>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <h1 style={{marginTop:"1.8rem"}}>Add New Bus Data</h1>
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <TextField required id="standard-required" label="Bus Company" value={BusCompany} onChange={(e) =>{
                    setBusCompany(e.target.value);
                }} className={classes.field}/>
                <TextField required id="standard-required" label="Bus Number" value={BusNumber} onChange={(e) =>{
                    setBusNumber(e.target.value);
                }} className={classes.field}/>
                <TextField required id="standard-required" label="Bus Class" value={Class} onChange={(e) =>{
                    setBusClass(e.target.value);
                }} className={classes.field}/>
                <TextField required id="standard-required" label="Special Offer" value={SpecialOffer} onChange={(e) =>{
                    setSpecialOffer(e.target.value);
                }} className={classes.field}/>
                <TextField required id="standard-required" label="Wifi" value={Wifi} onChange={(e) =>{
                    setWifi(e.target.value);
                }} className={classes.field}/>
                <TextField required id="standard-required" label="Total Seats" value={TotalSeats} onChange={(e) =>{
                    setTotalSeats(e.target.value);
                }} className={classes.field}/>
                <TextField required id="standard-required" label="Route1" value={Route1} onChange={(e) =>{
                    setRoute1(e.target.value);
                }} className={classes.field}/>
                <TextField required id="standard-required" label="Route 2" value={Route2} onChange={(e) =>{
                    setRoute2(e.target.value);
                }} className={classes.field}/>
                <TextField required id="standard-required" label="Avg Fair" value={AvgFair} onChange={(e) =>{
                    setAvgFair(e.target.value);
                }} className={classes.field}/>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
                <Button variant="contained" color="primary" onClick={(e)=>{
                    axios.post('https://fa19bse112apibackend.herokuapp.com/API/TransportRecord', {
                        BusNumber,BusCompany,Class,SpecialOffer,Wifi,TotalSeats,Route1,Route2,AvgFair
                    })
                    .then(function (response) {
                        console.log(response);
                        navigate('/Admin/home/ManageBuses')
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }}>
                     Add New Bus Record
            </Button>
            </Grid>
        </Grid>
        </div>
     );
}
 
export default NewBusesData;