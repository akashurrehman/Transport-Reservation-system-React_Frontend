import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import AdminNavbar from '../AdminPanel/AdminNavbar';

const AdminHelp = () => {
    return ( 
        <div>
        <AdminNavbar />
        <Grid items xs={12}>
                <Typography variant="h4" style={{backgroundColor:"#757575",padding:"1.9rem", textAlign:"left",color:"#fafafa",marginTop:"1.9rem"}}>Admin Help Page</Typography>
            </Grid>
        </div>
     );
}
 
export default AdminHelp;