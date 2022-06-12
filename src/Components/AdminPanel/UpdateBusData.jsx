import { Grid } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  field:{
    marginLeft:"1.9rem",
    marginTop:"1.5rem",
  },
  btncls:{
      display:"center",
  }
}));

const UpdateData = (props) => {
    const { id } = useParams(); 
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
    console.log(id);

    React.useEffect(
        ()=>{axios.get(`https://fa19bse112apibackend.herokuapp.com/API/TransportRecord/${id}`).then(res => {  
                    console.log(res);  
                    console.log(res.data);
                setBusCompany(res.data.BusCompany);
                setBusNumber(res.data.BusNumber);
                setBusClass(res.data.Class);
                setSpecialOffer(res.data.SpecialOffer);
                setWifi(res.data.Wifi);
                setTotalSeats(res.data.TotalSeats);
                setRoute1(res.data.Route1);
                setRoute2(res.data.Route2);
                setAvgFair(res.data.AvgFair);
            });
    }, []);
    
    return ( 
        <div>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <h1>Update Bus Data</h1>
            </Grid>
            <Grid item xs={12}>
                
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <TextField required id="standard-required" label="Bus Company" value={BusCompany} onChange={(e) =>{
                    setBusCompany(e.target.value);
                }} className={classes.field}/>
                <TextField required id="standard-required" label="Bus Company" value={BusNumber} onChange={(e) =>{
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
                    axios.put(`https://fa19bse112apibackend.herokuapp.com/API/TransportRecord/${id}`, {
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
                     Update Bus Record
            </Button>
            </Grid>
        </Grid>
        </div>
     );
}
 
export default UpdateData;