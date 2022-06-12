import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavItem, NavDropdown, Nav, Container } from 'react-bootstrap';

import { makeStyles } from '@material-ui/core/styles';
import UserService from '../../Services/UserServices';
const useStyles = makeStyles((theme) => ({
  link:{
    listStyleType:"none",
    paddingRight:"1.5rem",
    color:"white",
    fontSize:"1.2rem",
    },
    nav:{
    width: "100vw!important",
    }
}));


const AdminNavbar = () => {
    const classes=useStyles();
    return (  
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" style={{paddingBottom:"1.1rem"}}>
  
  <Navbar.Toggle  fixed="top" aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link to="/Admin/home/dashboard" className={classes.link}>Dashboard</Link>
      <Link to="/Admin/home/ManageUsers" className={classes.link}>Manage Users</Link>
      <Link to="/Admin/home/BookingHistory" className={classes.link}>Booking History</Link>
      <Link to="/Admin/home/ManageBuses" className={classes.link}>Manages Buses</Link>
    </Nav>
    <Nav>
      <Link to="/" className={classes.link} 
      onClick={e=>{UserService.logout()}}>Back to Main Site</Link>
      <Link to="/Admin/help" className={classes.link}>Help</Link>
      <Link to="/" className={classes.link} onClick={e=>{
            UserService.logout()
            window.location.href="/";
        }}>SignOut</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}
export default AdminNavbar;