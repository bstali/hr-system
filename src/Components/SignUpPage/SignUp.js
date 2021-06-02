import React, { useState } from 'react';
import axios from 'axios';

import { Grid, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({

    signUpMargin: {
        marginTop: '10%'
    },

    signUpErrorMessages: {
        color: 'red',
        fontSize: '12px',
    }
});


const SignUp = () => {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [company, setCompany] = useState('');
    const [name, setName] = useState('');
    const [inputEmailError, setInputEmailError] = useState(false);

    const [passwordMatchError, setPasswordMatchError] = useState(false)

    const emailHandler = (event) => {
        setEmail(event.target.value)
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }

    const confirmPasswordHandler = (event) => {
        setConfirmPassword(event.target.value)
    }

    const companyHandler = (event) => {
        setCompany(event.target.value)
    }

    const nameHandler = (event) => {
        setName(event.target.value)
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
                    setInputEmailError(true)
                } else {
                    setInputEmailError(false)
                }

                if (password !== confirmPassword) {
                    setPasswordMatchError(true)
                } else {
                    setPasswordMatchError(false)
                }

            });

            alert('Created user successfully!')

        // const postData=axios.post(' https://60895cb08c8043001757ea35.mockapi.io/api/user')
        // .then(response =>{
        //     const newUser = response.data;
        // }) 

    }


    return (
        <div className={classes.signUpMargin}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="flex-start"
                        spacing={2}
                    >

                        <Grid item>
                            <TextField
                                required
                                id="outlined-basic"
                                label="Enter Name"
                                variant="outlined"
                                value={name}
                                onChange={nameHandler} />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="outlined-basic"
                                label="Company Name"
                                variant="outlined"
                                value={company}
                                onChange={companyHandler} />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                value={email}
                                onChange={emailHandler} />
                        </Grid >
                        {inputEmailError ?
                            <Grid item style={{ padding: '0px 0px 0px 12px'}}>
                                <div className={classes.signUpErrorMessages}>This email already exist.</div>
                            </Grid>
                            : null
                        }
                        <Grid item>
                            <TextField
                                required
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                value={password}
                                onChange={passwordHandler} />
                        </Grid>

                        <Grid item style={{ paddingBottom: '4px' }}>
                            <TextField

                                id="outlined-basic"
                                label="Confirm Password"
                                variant="outlined"
                                value={confirmPassword}
                                onChange={confirmPasswordHandler} />
                        </Grid>
                        {passwordMatchError ?
                            <Grid item style={{ padding: '0px 0px 0px 12px'}}>
                                <div className={classes.signUpErrorMessages}>Password doesn't match.</div>
                            </Grid>
                            :
                            null
                        }


                    </Grid >
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={verifiedData}>
                        Create User
                    </Button>
                </Grid>
            </Grid>
        </div>

    )
}

export default SignUp;