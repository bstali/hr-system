import React from 'react';

import Grid from '@material-ui/core/Grid';
import Logo from '../Logo/logo'
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
   

    loginFormMargin: {
        marginTop: "15%"
    }
});


const Login = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div className={classes.loginFormMargin}>
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
                        <Grid item><TextField id="outlined-basic" label="Enter UserName" variant="outlined" /></Grid>
                        <Grid item><TextField id="outlined-basic" label="Enter Password" variant="outlined" /></Grid>
                        <Grid item> <Button variant="contained" color="primary">Login</Button>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
        </div>

    )

}

export default Login;