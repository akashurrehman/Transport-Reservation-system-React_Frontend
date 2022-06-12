import React from 'react';
import Footer from './../Footer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SingleData from './../busesdata/SingleData'
import Dropdown from 'react-dropdown';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import SingleBusRecord from '../busesdata/SingleBusRecord';

const useStyles = makeStyles((theme) => ({

  icon: {
    marginRight: theme.spacing(2),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  heroContent: {
    backgroundColor: "",
    padding: theme.spacing(3, 0, 5),
    marginTop:"5rem",
  },
  paper: {
    margin: theme.spacing(4, 2),
    marginLeft:'3rem',
    display: 'flex',
    flexDirection: 'column',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  image: {
    backgroundImage: 'url(/images/Login.webp)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
    form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  root: {
    height: '100%',
    backgroundColor: "blue",
  },
  center:{
      textAlign: 'center' ,
  },
}));

const Tickets = () => {
    const classes=useStyles();
    const[data,setProducts] =React.useState([]);
    const getdata =() => {axios.get("https://fa19bse112apibackend.herokuapp.com/API/TransportRecord").then((response) =>{
            setProducts(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }  
    React.useEffect(getdata,[]);
    return ( 
        <div>
            <Grid container maxWidth="sm" className={classes.root} >
            <Grid item xs={12} sm={12} component={Paper} square>
                <div className={classes.paper}>
                    <form className={classes.form} Validate style={{color:"blue", marginBottom:"5rem"}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={3}>
                            <Dropdown options={
                                data.map((product,index) =>(
                            <SingleData key={index} product={product} />
                            ))
                            }
                            placeholder="Pick Up Point" required/>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                        <Dropdown options={
                            data.map((product,index) =>(
                        <SingleData key={index} product={product} />
                        ))
                        }
                        placeholder="Dropping Point" required/>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                        <input type="date" style={{width:"100%", padding:"0.5rem"}} required placeholder='Date Of Journey'></input>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Link to="/bus-data/Tickets">
                            <Button style={{width:"11.5rem"}}
                            type="submit"
                            variant="contained"
                            color="primary">
                            Find Ticket
                            </Button>
                        </Link>
                        </Grid>
                    </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
            <div style={{display:"flex-start"}}>
                 {data.map((product,index) =>(
                <SingleBusRecord key={index} product={product} />
            ))}
            </div>
              <Footer/>
        </div>
     );
}
 
export default Tickets;