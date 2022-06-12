import React from 'react';
import AdminNavbar from './AdminNavbar';
import { makeStyles} from "@material-ui/styles";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Grid } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from '@material-ui/core/Paper';
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
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  btn:{
      color:"#009688",
  }
});

function ManageUsers() {
  const classes = useStyles();
  const [getData, setGetData] = React.useState([]);
  let navigate=useNavigate();

  React.useEffect(() => {
    axios.get("https://fa19bse112apibackend.herokuapp.com/API/users").then((usersdata) => {
      setGetData(usersdata.data);
    });
  }, [getData]);

  return (
    <div>
    <AdminNavbar/>
    <Grid items xs={12}>
        <Typography variant="h4" style={{backgroundColor:"#757575",padding:"1.9rem", textAlign:"left",color:"#fafafa",marginTop:"1.5rem"}}>User Manager</Typography>
    </Grid>
    <Grid items xs={12} md={6}>
        <Typography variant="h5" style={{marginTop:"1.5rem"}}>User Type</Typography>
    </Grid>
    <Grid item xs={12} sm={6} md={6} style={{float:"right"}}>
    
    
    <Link to="/Admin/home/UserRegistration">
    <Button  variant="contained" className={classes.btn}>Add New User</Button>
    </Link>
    </Grid>
    <Grid
     
            container
            spacing={4}
            className={classes.gridContainer}
            justify="center"
            style={{ marginTop: "80px" }}
    >
      
      {getData.map((usersdata,i) => {
        return (
            <Grid item xs={12} sm={6} md={4}>
            <Paper variant="outlined" square />
              <Card key={i} className={classes.root} variant="primary" >
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    User FirstName:{usersdata.FirstName}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    User Phone No:{usersdata.PhoneNumber}
                  </Typography>
                  <Typography variant="body2" component="p">
                    User Age:{usersdata.Age}
                    <br />
                  </Typography>
                 <Typography variant="body2" component="p">
                    User Role:{usersdata.role}
                    <br />
                  </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                    User Email:{usersdata.Email}
                  </Typography>
                </CardContent>
                <CardActions>
                <Button  variant="contained" color="primary" onClick={(e) =>{
                    navigate("/Admin/home/EditUserRegistration/" + usersdata._id);
                  }} className={classes.btn}>Edit
                </Button>
                  <Button  variant="contained" color="warning" className={classes.btn}
                  onClick={(e)=>{
                    axios.delete(`http://localhost:3040/API/users/${usersdata._id}`)  
                  .then(res => {  
                    console.log(res);  
                    console.log(res.data);
                  })
                .catch(function (error) {
                    console.log(error);
                  });
          }}>Delete</Button>
                </CardActions>
              </Card>
            </Grid>
        );
      })}
      </Grid>
    </div>
  );
}
export default ManageUsers;