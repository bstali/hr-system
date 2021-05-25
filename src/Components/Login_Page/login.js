import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import './login.css'

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({

    loginFormMargin: {
        marginTop: "15%"
    },

    signUpColor: {
        color: "blue"
    },

});

const Login = () => {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inputEmailError, setInputEmailError] = useState(false);
    const [inputPasswordError, setInputPasswordError] = useState(false);
    const history = useHistory()

    const changingEmail = (event) => {
        setEmail(event.target.value)
    }

    const changingPassword = (event) => {
        setPassword(event.target.value)
    }

    const verifiedData = () => {
        axios.get('https://60895cb08c8043001757ea35.mockapi.io/api/user')
            .then(response => {


                const userArray = response.data;
                const inputEmail = email;
                const result = userArray.find((user => {
                    return user.email === inputEmail;

                }))

                if (result) {
                    setInputEmailError(false)
                } else {
                    setInputEmailError(true)
                }

                const inputPassword = password;
                const resultPassword = userArray.find((user => {
                    return user.password === inputPassword;
                }))

                if (resultPassword) {
                    setInputPasswordError(false)
                } else {
                    setInputPasswordError(true)
                }

                console.log('found user: ', result)


                if (result && resultPassword) {
                    localStorage.setItem('email', JSON.stringify(email));
                    localStorage.setItem('password', JSON.stringify(password));
                    history.push("/HelloUser");
                }


            });
    }

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
                        <Grid item><TextField
                            id="outlined-basic"
                            label="Enter UserName"
                            variant="outlined"
                            onChange={changingEmail} />
                        </Grid>
                        {
                            inputEmailError ?
                                <span className="error-message">Incorrect Email</span>

                                :
                                null
                        }

                        <Grid item><TextField
                            id="outlined-basic"
                            label="Enter Password"
                            variant="outlined"
                            onChange={changingPassword} />
                        </Grid>
                        {
                            inputPasswordError ?
                                <span className="error-message">Incorrect Password</span>
                                :
                                null
                        }


                        <Grid item>

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={verifiedData}
                            >
                                Login </Button>
                        </Grid>

                        <Grid><p>Don't have an account? <strong><Link to="/SignUp">SignUp</Link></strong></p></Grid>

                    </Grid>

                </Grid>

            </Grid>
        </div>

    )

}

export default Login;