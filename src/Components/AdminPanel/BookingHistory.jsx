import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import AdminNavbar from './AdminNavbar';
const BookingHistory = () => {
    return ( 
            <div>
            <AdminNavbar/>
            <Grid items xs={12}>
                <Typography variant="h4" style={{backgroundColor:"#757575",padding:"1.9rem", textAlign:"left",color:"#fafafa",marginTop:"1.5rem"}}>Booking History Management</Typography>
            </Grid>
                <h1></h1>
            </div>
     );
}
 
export default BookingHistory;