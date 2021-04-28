import { Grid, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import React from 'react';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },

    signUpMargin: {
      marginTop: "15%"
    }
  }));


const SignUp = () => {
    const classes = useStyles(); 
    return (
        
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            
        >           
                   <Grid item sm={12}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <form className={classes.root} noValidate autoComplete="off">
                        <Grid item><TextField required id="outlined-basic" label="Company Name" variant="outlined" /></Grid>
                        <Grid item><TextField required id="outlined-basic" label="Enter Your Name" variant="outlined" /></Grid>
                        <Grid item><TextField required id="outlined-basic" label="Email" variant="outlined" /></Grid>
                        <Grid item><TextField required id="outlined-basic" label="Password" variant="outlined" /></Grid>
                        <Grid item><TextField required id="outlined-basic" label="Password Confirmation" variant="outlined" /></Grid>
                        </form>
                        
                    </Grid >

                </Grid>
        </Grid>
    )
}

export default SignUp;