
import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },

    signUpMargin: {
        marginTop: "10%"
    }
}));


const SignUp = () => {
    const classes = useStyles();
    return (
        <div className={classes.signUpMargin}>
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
                            <Grid item><TextField required id="outlined-basic" label="Password" variant="outlined" type="Password"/></Grid>
                            <Grid item><TextField required id="outlined-basic" label="Password Confirmation" variant="outlined" /></Grid>
                            <Grid item> <Button variant="contained" color="primary">Create User</Button></Grid>
                        </form>

                    </Grid >

                </Grid>
            </Grid>
        </div>

    )
}

export default SignUp;