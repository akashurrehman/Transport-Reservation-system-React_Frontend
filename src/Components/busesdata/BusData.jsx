import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import SingleData from './SingleData';
import Footer from "./../Footer";
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { Fab } from '@material-ui/core';
import NewBusesData from '../AdminPanel/NewBusesData';
import Topmenu from '../TopMenu';

const useStyles = makeStyles((theme) => ({
  btn:{
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
}));

const BusData = (props) => {

    const classes = useStyles();
    const[data,setProducts] =React.useState([]);
    const getdata =() => {axios.get("https://fa19bse112apibackend.herokuapp.com/API/TransportRecord").then((response) =>{
            setProducts(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }
    const handleclickbtn=() =>{
        console.log("In Handle click btn function");
        <Router>
        <Routes>
        <Route exact path="/bus-data/new-data" element={<NewBusesData />} />
        </Routes>
        </Router>
    };
    React.useEffect(getdata,[]);
    console.log(data.length);
       return(
       <div >
       <Topmenu />
            <h1 style={{marginTop:"3.9rem"}}>Bus Data Component</h1>
            <Link to={'/bus-data/new-data'}>
            <Fab size="medium" color="primary" aria-label="add" className={classes.btn} onClick={handleclickbtn}>
                <AddIcon />
            </Fab>
            </Link>
            {data.length ===0 ?(
                <p>There are No Products...</p>
            ):
            (
            <Grid container spacing={3}>
                {data.map((product,index) =>(
                <SingleData key={index} product={product} onDelete={getdata}/>
                ))}     
            </Grid>
            )}
            
            <Footer />
            
        </div>
       );
}
export default BusData;

