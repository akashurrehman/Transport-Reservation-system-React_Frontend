import React from 'react';
import AdminNavbar from './AdminNavbar';
import { useState, useEffect } from 'react';
import { makeStyles, withStyles } from "@material-ui/styles";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { useNavigate } from 'react-router-dom';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles({
  table: {
border: "1px solid #ddd",
   padding: "8px",
  },
});

const ManageBuses = () => {
    let navigate=useNavigate();
    const classes=useStyles();
    const [data, getData] = useState([])
    const URL = 'https://fa19bse112apibackend.herokuapp.com/API/TransportRecord';
 
    useEffect(() => {
        fetchData()
    }, [])
 
 
    const fetchData = () => {
        fetch(URL)
            .then((response) =>
                response.json())
            .then((response) => {
                console.log(response);
                getData(response);
            })
 
    }
    return ( 
        
        <div>
            <AdminNavbar/>

    <Grid items xs={12}>
        <Typography variant="h4" style={{backgroundColor:"#757575",padding:"1.9rem", textAlign:"left",color:"#fafafa",marginTop:"1.5rem"}}>All Type Vehicle Manager</Typography>
    </Grid>
    <Grid item spacing={3}>
    <Grid item xs={6} sm={6} md={8}>
    <Typography variant="h5" component="h5">
    Bus Services
    <br />
    </Typography>
    </Grid>
    <Grid item xs={6} sm={6} md={4} style={{float:"right", marginBottom:"1.5rem"}}>
    <Link to={'/bus-data/new-data'}>
    <Button  variant="contained" className={classes.btn}>Add New Record</Button>
    </Link>
    </Grid>
    </Grid>
            <Table>
            <Thead>
                <Tr style={{backgroundColor:"#29b6f6"}}>
                    <Th className={classes.table}>Bus Id</Th>
                    <Th className={classes.table}>Bus Company</Th>
                    <Th className={classes.table}>BusNumber</Th>
                    <Th className={classes.table}>Bus Class</Th>
                    <Th className={classes.table}>Any Special Offer</Th>
                    <Th className={classes.table}>Route1</Th>
                    <Th className={classes.table}>Route2</Th>
                    <Th className={classes.table}>AvgFair</Th>
                    <Th className={classes.table}>Actions</Th>
                </Tr>
            </Thead>
                {data.map((item, i) => (
                   <Tbody>
                    <Tr key={i}>
                        <Td>{item._id}</Td>
                        <Td>{item.BusCompany}</Td>
                        <Td>{item.BusNumber}</Td>
                        <Td>{item.Class}</Td>
                        <Td>{item.SpecialOffer}</Td>
                        <Td style={{marginTop:"1.5rem"}}>{item.Route1}</Td>
                        <Td>{item.Route2}</Td>
                        <Td>{item.AvgFair}</Td>
                        <Td>
                        <Button  variant="contained" color="primary" onClick={(e) =>{
                        navigate("/bus-data/update/" + item._id);
                        }} className={classes.btn}>Edit
                        </Button>
                            <Button  variant="contained" color="warning" className={classes.btn}
                            onClick={(e)=>{
                                axios.delete(`https://fa19bse112apibackend.herokuapp.com/API/TransportRecord/${item._id}`)  
                            .then(res => {  
                                console.log(res);  
                                console.log(res.data);
                                fetchData();
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                            }}>Delete
                            </Button>
                        </Td>
                    
                    </Tr>
                    <hr style={{width:"100%"}}/>
                    </Tbody>
                ))}
            </Table>
        </div>
     );
}

export default ManageBuses;