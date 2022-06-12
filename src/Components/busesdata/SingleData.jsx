import { Grid } from '@material-ui/core';
import React from 'react';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import axios from 'axios';
import UserService from '../../Services/UserServices';
const useStyles = makeStyles((theme) => ({
  btn:{
    marginLeft:"10.8rem",
    padding:"4.5rem",
  },
}));
const SingleData = ({product,onDelete}) => {
  let navigate = useNavigate();
    const classes={useStyles};
    return ( 
     
        <Grid item xs={4}>
            <option>{product.BusCompany}</option>
            <br/>
            {UserService.islogIn() &&(<>
            <Button  variant="contained" color="primary" editicon={<ArrowDownwardIcon />} onClick={(e) =>{
              navigate("/bus-data/update/" + product._id);
            }} className={classes.btn}>Edit</Button>
            <Button  variant="contained" color="secondary" startIcon={<DeleteIcon />} className={classes.btn} 
            onClick={(e)=>{
                    axios.delete(`https://fa19bse112apibackend.herokuapp.com/API/TransportRecord/${product._id}`)  
                  .then(res => {  
                    console.log(res);  
                    console.log(res.data);
                    onDelete();
                  })
                .catch(function (error) {
                    console.log(error);
                  });
          }}>

                Delete</Button>
              </>)
            }
            <hr />
        </Grid>
     );
}
 
export default SingleData;