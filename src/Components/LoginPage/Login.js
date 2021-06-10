import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
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
        color: "#14196b"
    },

    loginErrorMessages: {
        color: 'red',
        fontSize: '12px',
    },

    loginButton: {
        marginTop: '13px'
    }

});

const Login = () => {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inputEmailError, setInputEmailError] = useState(false);
    const [inputPasswordError, setInputPasswordError] = useState(false);
    const history = useHistory()

    const emailHandler = (event) => {
        setEmail(event.target.value)
    }

    const passwordHandler = (event) => {
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
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="flex-start"
                        spacing={2}
                    >
                        <Grid item><TextField
                            id="outlined-basic"
                            label="Enter UserName"
                            variant="outlined"
                            value={email}
                            onChange={emailHandler} />
                        </Grid>
                        {inputEmailError ?
                            <Grid item style={{ padding: '0px 0px 0px 12px' }}>
                                <div className={classes.loginErrorMessages}>Invalid email.</div>
                            </Grid>
                            : null
                        }

                        <Grid item>
                            <TextField
                                id="standard-error-helper-text"
                                label="Enter Password"
                                variant="outlined"
                                value={password}
                                onChange={passwordHandler} />
                        </Grid>
                        {inputPasswordError ?
                            <Grid item style={{ paddingTop: '0px', paddingLeft: '12px' }}>
                                <div className={classes.loginErrorMessages}>Invalid password.</div>
                            </Grid>
                            : null
                        }
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={verifiedData}
                            className={classes.loginButton}
                        >
                            Login </Button>
                    </Grid>
                    <Grid><p>Don't have an account?
                         <strong>
                            <Link to="/SignUp" className={classes.signUpColor}>SignUp</Link>
                        </strong>
                    </p>
                    </Grid>

                </Grid>

            </Grid>
        </div>

    )

}

export default Login;