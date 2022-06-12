import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container,NavDropdown, Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import UserService from '../Services/UserServices';
const useStyles = makeStyles((theme) => ({
link: {
    textDecoration:"none",
    listStyleType:"none",
    paddingRight:"1.5rem",
    paddingLeft:"0.5rem",
    color:"white",
    fontSize:"1.3rem",
},
nav:{
    width: "100vw!important",
},
linkright:{
    color:"white",
    paddingRight:"0.9rem",
    float: "right",
  },
  navmargin:{
    marginBottom:"12.5rem",
    backgroundColor:"#448aff",
  },
}));

const Topmenu = () => {
    const classes = useStyles();
    return (    
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="primary" variant="dark" className={classes.navmargin} style={{marginBottom:"2.5rem"}}>

    <Navbar.Toggle  fixed="top" aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Link to="/" className={classes.link}>Home</Link>
        <Link to="/bus-data" className={classes.link}>Buses Data</Link>
        <Link to="/contact-us" className={classes.link}>Contact Us</Link>
        <Link to="/Destinations" className={classes.link}>Popular Routes</Link>
        
         {UserService.isAdmin()&&(
        <>
        <Link to="/bus-data/new-data" className={classes.link}>Add New Data</Link>
        </>
        )}
        
    <NavDropdown title="Client Area" id="collasible-nav-dropdown" style={{color:"white", fontSize:"1.3rem"}}>
    {!UserService.islogIn()?<>
        <NavDropdown.Item style={{backgroundColor:"#2979ff"}}><Link to="/Login" className={classes.link}>Login</Link></NavDropdown.Item>
        <NavDropdown.Item style={{backgroundColor:"#2979ff"}}><Link to="/SignUp" className={classes.link}>Sign Up</Link></NavDropdown.Item>
    </>:<Button variant="contained" color="primary" 
        onClick={e=>{
            UserService.logout()
            window.location.reload();
        }}
        >LogOut   <br/>{
            UserService.getLoggedInUser().role 
        }</Button>}
    
    </NavDropdown>
        </Nav>
    <Nav>
    <Link to="/Admin-Login" className={classes.link}>Login As Admin</Link>
        {UserService.isAdmin()&&(
        <>
        <Link to="/Admin-Login" className={classes.link}>Login As Admin</Link>
        </>
        )}
    </Nav> 
    </Navbar.Collapse>
    </Navbar>
    );
}
export default Topmenu;
