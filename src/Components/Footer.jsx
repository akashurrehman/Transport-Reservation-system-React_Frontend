import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { List, ListItem, } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage: 'url(/images/Login.webp)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  root: {
    color:"#eeeeee",
    backgroundColor:"#039be5",
    display: 'flex',
    flexDirection: 'column',
    minHeight: '70vh',
    marginTop:"5rem",
    marginBottom:"0",
  },
  main: {
    marginTop: theme.spacing(8),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  list:{
    fontSize:"1.1rem"
  },
  title:{
    paddingLeft:"1rem",
    fontStyle:"bold",
    fontSize:"1.5rem",
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main}>
        <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" className={classes.title}>
            Delectus culpa laboriosam debitis saepe. Commodi earum minus ut obcaecati veniam deserunt est!
          </Typography>
          <div>
            <List className={classes.list}>
                <ListItem> All rights reserved. Copyright © 2022</ListItem>
                <ListItem> +92349-4611282</ListItem>
                <ListItem> akashurrehman456@gmail.com</ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" className={classes.title}>
            Useful Links
          </Typography>
          <div>
            <List className={classes.list}>
                <ListItem> About </ListItem>
                <ListItem> FAQ </ListItem>
                <ListItem> Blog </ListItem>
                <ListItem> Contact </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" className={classes.title}>
            Policies
          </Typography>
          <div>
            <List className={classes.list}>
                <ListItem> Privacy Policiy </ListItem>
                <ListItem> Terms & Condition </ListItem>
                <ListItem> Refund Policy  </ListItem>
                <ListItem> Ticket Policies</ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" className={classes.title}>
            Features
          </Typography>
          <div>
            <List className={classes.list}>
                <ListItem> Bus Booking </ListItem>
                <ListItem> Imported Buses </ListItem>
                <ListItem> Market related Prices  </ListItem>
                <ListItem> Special Discount</ListItem>
            </List>
          </div>
        </Grid>
        </Grid>
      </Container>
    </div>
  );
}
