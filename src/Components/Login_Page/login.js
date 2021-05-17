import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

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


const Login = (props) => {
    const classes = useStyles();

    const [user, setUser] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inputEmailError, setInputEmailError] = useState(false);
    const [inputPasswordError, setInputPasswordError] = useState(false);


    const changingEmail = (event) => {
        setEmail(event.target.value)
    }

    const changingPassword = (event) => {
        setPassword(event.target.value)
    }

    const verifiedData = () => {
        axios.get('https://60895cb08c8043001757ea35.mockapi.io/api/user')
            .then(response => {
                setUser(response.data)

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
                    console.log('user logged in ')
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
                        <Grid item>
                            {
                                inputEmailError ?
                                    <span style={{ color: "red" }}>Enter Valid Email</span>
                                    :
                                    null
                            }

                        </Grid>
                        <Grid item><TextField
                            id="outlined-basic"
                            label="Enter Password"
                            variant="outlined"
                            onChange={changingPassword} />
                        </Grid>
                        <Grid item>
                            {
                                inputPasswordError ?
                                    <span style={{ color: "red" }}>Invalid Password</span>
                                    :
                                    null
                            }

                        </Grid>

                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={verifiedData}
                            >
                                Login</Button>

                        </Grid>

                        <Grid><p>Don't have an account? <strong><Link to="/SignUp">SignUp</Link></strong></p></Grid>


                    </Grid>

                </Grid>

            </Grid>
        </div>

    )

}

export default Login;