import { Grid } from '@material-ui/core';
import React from 'react';
// import Navbar from '../NavBar/navbar';



const HelloUser = () => {
    const email = JSON.stringify(localStorage.getItem('email'))
    const password = JSON.stringify(localStorage.getItem('password'))
    return (<Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
    >
        {/* <Grid item sm={12}> <Navbar /> </Grid> */}
        <Grid item sm={12}>
            <h1>Hi! my email is: {email} <br /> password is: {password}</h1>
        </Grid>
    </Grid>
    )

}
export default HelloUser;