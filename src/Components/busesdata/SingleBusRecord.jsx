import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

  root:{
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(4, 2),
    display: 'flex',
    flexDirection: 'column',
  },
}));

const SingleBusRecord = ({product}) => {
    const classes = useStyles();
    const cards=[product.length];
    return ( 
        <div>
          {/* End hero unit */}
          <Grid

                container
                spacing={12}
                direction="row"
                display='flex-start'
                justify="flex"
                alignItems="flex"
                style={{marginTop:"1.5rem"}}
            >
            {cards.map((card) => (
              <Grid item xs={12} sm={12} md={12} key={card}>
                <Card className={classes.card} style={{backgroundColor:"#e0e0e0",color:"#616161", display:"flex-end"}}>
                  <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h4">
                     Bus Number: {product.BusNumber}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h5">
                     Bus Company: {product.BusCompany}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Bus Class: {product.Class}
                    </Typography>
                    <Typography variant="h5" component="h2">
                     Avg Fair of One Route: {product.AvgFair}
                    </Typography>
                    <Typography variant="h5" component="h2">
                     Total Seats of Bus: {product.TotalSeats}
                    </Typography>
                     <Typography variant="h5" component="h2">
                      Route1: {product.Route1}
                    </Typography>
                      <Typography variant="h5" component="h2">
                      Route2: {product.Route2}
                    </Typography>
                    <hr />
                    <Typography variant="h5" component="h2">
                      Availability of Special Offer: {product.SpecialOffer}
                    </Typography>
                  </CardContent>
                  <CardActions>
                   <Link to="/bus/checkout" className={classes.link}>
                   <Button  variant="contained" color="primary" className={classes.btn}>Select Seat</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
              
            ))}
          </Grid>
        </div>
     );
}

export default SingleBusRecord;