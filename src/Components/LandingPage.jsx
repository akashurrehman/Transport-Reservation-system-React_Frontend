import React from 'react'
import axios from 'axios';
import SingleData from './busesdata/SingleData';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Wifi } from 'react-bootstrap-icons';
import Dropdown from 'react-dropdown';
import Footer from './Footer';
import Button from '@material-ui/core/Button';
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from '@material-ui/core/Container';
import "react-datepicker/dist/react-datepicker.css";
import { Carousel } from 'react-bootstrap';
import Topmenu from './TopMenu';

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
const LandingPage = () => {
    const classes = useStyles();
    const[data,setProducts] =React.useState([]);
    const getdata =() => {axios.get("https://fa19bse112apibackend.herokuapp.com/API/TransportRecord").then((response) =>{
            setProducts(response.data);
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }  
    React.useEffect(getdata,[]);


return ( 

    <div>
      <Topmenu />
        <CssBaseline />
          {/* Book your bus ticket*/}

        <Grid container spacing={8} style={{marginTop:"1.9rem"}}>
        <Grid items xs={12}>
        <Typography variant="h4" style={{backgroundColor:"#03a9f4",padding:"1.9rem", textAlign:"left",color:"#fafafa",marginTop:"1.5rem",marginBottom:"2.5rem"}}>Book Your Seat Now!</Typography>
        </Grid>
        </Grid>
        <Grid container maxWidth="sm" className={classes.root}>
            <Grid item xs={12} sm={12} md={6} className={classes.image}>
                <Typography  component="h1" variant="h3" fontWeight={500} style={{color:"#424242",textAlign:"center"}}>
                    TRANSPORT BOOKING
                </Typography>
                <Typography component="p" variant="h5" style={{color:"#616161",marginTop:"1.55rem",textAlign:"left"}}>
                    Try our cabCOMPARE tool to compare the fares for your journey from different cab operators in your area. 
                    Simply enter your journey details and quotes will be generated. 
                    Fixed prices and free cancellations (subject to terms and conditions ).
                </Typography>
                <Typography  component="h1" variant="h3" fontWeight="fontWeightBold" style={{color:"#263238", marginTop:"1.55rem",fontStyle:"bold",textAlign:"center"}}>
                    Have a Good Journey
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} component={Paper} square >
                <div className={classes.paper} Style={{backgroundColor:"#303f9f"}}>
                    <Typography  component="h1" variant="h3" style={{color:"#448aff"}}>
                        Choose Your Ticket
                    </Typography>
                
                    <form className={classes.form} Validate style={{color:"blue", marginBottom:"5rem"}}>
                        <Dropdown options={
                            data.map((product,index) =>(
                        <SingleData key={index} product={product} />
                        ))
                        }
                        placeholder="Pick Up Point" required/>
                       <br />
                       <br />
                        <Dropdown options={
                            data.map((product,index) =>( 
                        <SingleData key={index} product={product} />
                        ))
                        }
                        placeholder="Dropping Point" required/>

                        <br />
                        <br />
                        <input type="date" style={{width:"100%", padding:"0.5rem"}} required></input>
                        <Link to="/bus-data/Tickets">
                        <Button style={{marginTop:"5rem"}}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary">
                        Find Ticket
                        </Button>
                        </Link>
                    </form>
                    </div>
            </Grid>
        </Grid>

          {/* how to book tickets*/}
        <div className={classes.heroContent} style={{backgroundColor:"#0d47a1"}}>
        <Container maxWidth="sm">
            <Typography component="h3" variant="h4" align="center" gutterBottom style={{color:"#fafafa"}}>
              Get Your Tickets With Just 3 Steps
            </Typography>
            <Typography component="h5" variant="h5" align="center" style={{color:"#f5f5f5", width:"auto"}} paragraph>
            Have a look at our popular reason. why you should choose you bus. Just a Bus and get a ticket for your great 
            journey. !
            </Typography>
        </Container>
        </div>
        <div style={{backgroundColor:"#0d47a1",marginBottom:"1.5rem"}}>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/search.webp"
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.center}>
                      Search Your Bus
                    </Typography>
                    <Typography className={classes.center}>
                      Choose your origin, destination,Just choose a Bus journey dates and search for buses
                    </Typography>
                </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/card-4.jpg"
                    title="Image title"
                />
                <CardContent className={classes.cardContent, classes.center} >
                    <Typography gutterBottom variant="h5" component="h2">
                      Choose Your Ticket
                    </Typography>
                    <Typography className={classes.center}>
                      Choose your origin, destination,Just a Bus for your great journey dates and search for buses
                    </Typography>
                </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/card.webp"
                    title="Image title"
                />
                <CardContent className={classes.cardContent, classes.center}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Pay Bill
                    </Typography>
                    <Typography className={classes.center}>
                      Choose your origin, destination,choose a Bus for your great journey dates and search for buses
                    </Typography>
                </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
        </div>

        {/*Carousal Images*/}
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src="images/Carousal/caoursal-5.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src="images/Carousal/caoursal-4.png"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src="images/Carousal/caorusal-3.png"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        
        {/*End Instruction*/}
        <hr style={{backgroundColor:"blue", width:"70%", fontStyle:"bold", marginTop:"4rem"}} />
        {/*Facilities Provided By Website*/}
        <div className={classes.heroContent}>
        <Container maxWidth="sm">
            <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
              Our Amenities
            </Typography>
            <Typography component="h5" variant="h5" align="center" color="#616161" paragraph>
            Have a look at our popular reason. why you should choose you bus. Just a Bus and get a ticket for your great 
            journey. !
            </Typography>
        </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid item xs={6} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/Card/wifi.jpg"
                    title="Image title"
                />
                <CardContent className={classes.cardContent} style={{backgroundColor:"#1565c0", color:"#f5f5f5"}}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.center} >
                      Wifi
                </Typography>
                </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia style={{backgroundSize: 'center',backgroundPosition: 'cover'}}
                    className={classes.cardMedia}
                    image="/images/Card/waterbottle.jpg"
                    title="Image title"
                />
                <CardContent className={classes.cardContent} style={{backgroundColor:"#1565c0", color:"#f5f5f5"}}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.center}>
                      Water Bottles
                    </Typography>
                </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia 
                    className={classes.cardMedia}
                    image="/images/Card/food.jpg"
                    title="Image title"
                />
                <CardContent className={classes.cardContent} style={{backgroundColor:"#1565c0", color:"#f5f5f5"}}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.center}>
                      Meal
                    </Typography>
                </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia style={{backgroundSize: 'cover',backgroundPosition: 'center',}}
                    className={classes.cardMedia}
                    image="/images/Card/softdrinks.jpg"
                    title="Image title"
                />
                <CardContent className={classes.cardContent} className={classes.center} style={{backgroundColor:"#1565c0", color:"#f5f5f5"}}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Soft Drinks
                    </Typography>
                </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>

        {/* End Out Enemities*/}

        <div className={classes.heroContent} style={{backgroundColor:"#0d47a1"}}>
        <Container maxWidth="sm" className={classes.center} >
            <Typography component="h3" variant="h3" align="center" gutterBottom style={{color:"#f5f5f5"}}>
              Our Popular Buses
            </Typography>
        </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="xl" style={{backgroundColor:"#0d47a1"}}>
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid item xs={6} sm={6} md={2}>
                <Card className={classes.card}>
                 <CardMedia
                    className={classes.cardMedia}
                     image="/images/Buses/Bus_5.jpg"
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.center}>
                      Azad Daewoo
                </Typography>
                </CardContent>
                </Card>
              </Grid>
            <Grid item xs={6} sm={6} md={2}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                     image="/images/Buses/Bus_7.webp"
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.center}>
                      AL AZIZ DAEWOO Service
                </Typography>
                </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} sm={6} md={2}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                     image="/images/Buses/Bus_4.webp"
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.center}>
                      Pakiza Travel
                    </Typography>
                </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} sm={6} md={2}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                     image="/images/Buses/Bus_6.jpg"
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.center}>
                      Diamond Coach
                    </Typography>
                </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} sm={6} md={2}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                     image="/images/Buses/Bus_2.jpg"
                    title="Image title"
                />
                <CardContent className={classes.cardContent} >
                    <Typography gutterBottom variant="h5" component="h2" className={classes.center}>
                      PAKLINES
                    </Typography>
                </CardContent>
                </Card>
              </Grid>
            <Grid item xs={6} sm={6} md={2}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/Buses/Bus_8.jpg"
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.center}>
                      New Khan
                    </Typography>
                </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
            <Footer />
        </div>
    );
    
}
 
export default LandingPage;