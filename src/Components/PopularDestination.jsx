import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';
import Footer from './Footer';
import Topmenu from './TopMenu';

const useStyles = makeStyles((theme) => ({

  icon: {
    marginRight: theme.spacing(2),
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
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
    display: 'flex',
    flexDirection: 'column',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    height: '100%',
    background: "",
    marginTop:"2.5rem",
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    align:"center",
  },
  center:{
      textAlign: 'center' ,
  },
}));
const PopularDestinations = () => {
    const classes=useStyles();
    return ( 
        <div style={{marginTop:"1.7rem"}}>
        <Topmenu />
        <Grid container spacing={8} style={{marginTop:"1.9rem"}}>
        <Grid items xs={12}>
        <Typography variant="h4" style={{backgroundColor:"#03a9f4",padding:"1.9rem", textAlign:"left",color:"#fafafa",marginTop:"1.5rem",marginBottom:"2.5rem"}}>All Destinations Which We Cover</Typography>
        </Grid>
        </Grid>
            <Grid container  className={classes.root}>
            <Grid item xs={12} sm={12} md={12} className={classes.image}>
                <Typography component="p" variant="h5" style={{color:"#616161",marginTop:"1.55rem",textAlign:"left"}}>
                    Whatever is your destination, we are at your service.Bookme provides online bus bookings for various major routes in Pakistan i.e. Lahore, Karachi, Islamabad, Multan, Faisalabad and Rawalpindi etc.
                     You can easily find the best prices for online tickets to your destination through Bookme.
                </Typography>
                <Typography  component="h1" variant="h3" fontWeight="fontWeightBold" style={{color:"#263238", marginTop:"1.55rem",fontStyle:"bold",textAlign:"center"}}>
                    Have a Good Journey
                </Typography>
            </Grid>
            <Grid container spacing={3} style={{marginTop:"1.9rem"}}>
            <Grid item xs={12} sm={4} component={Paper} square >
                <div className={classes.paper} Style={{backgroundColor:"#303f9f"}}>
                <CardMedia
                    className={classes.cardMedia}
                    image="/images/citiesimg/city-3.jpg"
                    title="Image title"
                />
                </div>
            </Grid>
            <Grid item xs={12} sm={4} component={Paper} square >
                <div className={classes.paper} Style={{backgroundColor:"#303f9f"}}>
                <CardMedia
                    className={classes.cardMedia}
                    image="/images/citiesimg/city_1.jpg"
                    title="Image title"
                />
                </div>
            </Grid>
            <Grid item xs={12} sm={4} component={Paper} square >
                <div className={classes.paper} Style={{backgroundColor:"#303f9f"}}>
               <CardMedia
                    className={classes.cardMedia}
                    image="/images/citiesimg/city-2.jpg"
                    title="Image title"
                />
                </div>
            </Grid>
            <Grid item xs={12} sm={4} component={Paper} square >
                <div className={classes.paper} Style={{backgroundColor:"#303f9f"}}>
               <CardMedia
                    className={classes.cardMedia}
                    image="/images/citiesimg/city-4.jpg"
                    title="Image title"
                />
                </div>
            </Grid>
            <Grid item xs={12} sm={4} component={Paper} square >
                <div className={classes.paper} Style={{backgroundColor:"#303f9f"}}>
               <CardMedia
                    className={classes.cardMedia}
                    image="/images/citiesimg/city-5.jpg"
                    title="Image title"
                />
                </div>
            </Grid>
            <Grid item xs={12} sm={4} component={Paper} square >
                <div className={classes.paper} Style={{backgroundColor:"#303f9f"}}>
               <CardMedia
                    className={classes.cardMedia}
                    image="/images/citiesimg/city-8.jpg"
                    title="Image title"
                />
                </div>
            </Grid>
            </Grid>
             <Grid container  className={classes.root}>
            <Grid item xs={12} sm={12} md={12} className={classes.image}>
                <Typography  component="h1" variant="h3" fontWeight="fontWeightBold" style={{color:"#263238", marginTop:"1.55rem",fontStyle:"bold",textAlign:"center"}}>
                    Our Bus Partners
                </Typography>
                <Typography component="p" variant="h5" style={{color:"#616161",marginTop:"1.55rem",textAlign:"left"}}>
                    Providing a pool of bus vendors, bookme entertains its customers with exceptional 
                    bus online ticketing experience. One can make the right travel decision and arrangements for a 
                    great journey. Pakistan’s largest online bus ticketing site has driven bus e-ticketing service to
                     new heights with 150+ bus companies on-board. Furthermore, Bookme covers all the major bus routes of 
                     Pakistan.In short, bookme is the complete solution for your online bus tickets.
                </Typography>

            </Grid>
            <Grid item xs={4} md={2} component={Paper} square >
                <div className={classes.paper} Style={{backgroundColor:"#303f9f"}}>
               <CardMedia
                    className={classes.cardMedia}
                    image="/images/bus-logo/logo6.png"
                    title="Image title"
                />
                </div>
            </Grid>
            <Grid item xs={4} md={2} component={Paper} square >
                <div className={classes.paper} Style={{backgroundColor:"#303f9f"}}>
               <CardMedia
                    className={classes.cardMedia}
                    image="/images/bus-logo/logo5.png"
                    title="Image title"
                />
                </div>
            </Grid>
            <Grid item xs={4} md={2} component={Paper} square >
                <div className={classes.paper} Style={{backgroundColor:"#303f9f"}}>
               <CardMedia
                    className={classes.cardMedia}
                    image="/images/bus-logo/logo4.jpg"
                    title="Image title"
                />
                </div>
            </Grid>
            <Grid item xs={4} md={2} component={Paper} square >
                <div className={classes.paper} Style={{backgroundColor:"#303f9f"}}>
               <CardMedia
                    className={classes.cardMedia}
                    image="/images/bus-logo/logo3.png"
                    title="Image title"
                />
                </div>
            </Grid>
            <Grid item xs={4} md={2} component={Paper} square >
                <div className={classes.paper} Style={{backgroundColor:"#303f9f"}}>
               <CardMedia
                    className={classes.cardMedia}
                    image="/images/bus-logo/logo2.png"
                    title="Image title"
                />
                </div>
            </Grid>
            <Grid item xs={4} md={2} component={Paper} square >
                <div className={classes.paper} Style={{backgroundColor:"#303f9f"}}>
               <CardMedia
                    className={classes.cardMedia}
                    image="/images/bus-logo/logo1.png"
                    title="Image title"
                />
                </div>
            </Grid>
            </Grid>
        </Grid>
        <Footer/>
        </div>
     );
}

export default PopularDestinations;