import React from 'react';
import { makeStyles, CardContent, Card, TextField } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        width: '100%',
        boxShadow: '2px 5px 7px grey'
    },

    TextField: {
        width: '50%',
        marginBottom: '10px',
        

    },

    TextField_label_display: {
        display: 'flex',
    },

    Label_size: {
        width: '150px',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: '25px'
    },
    
})

export default function UserInfo(props) {
    const classes = useStyles();
    const user =props.userDetail
        console.log("user from child", user)
    return (
        <Card className={classes.card}>
          
            <CardContent> 
                {user ?
                <div>
                <div
                    className={classes.TextField_label_display}>
                    <p className={classes.Label_size}>Employee ID:</p>
                    <TextField className={classes.TextField}
                        id="filled-read-only-input"
                        defaultValue={user.id}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="filled"
                    />
                </div>
                <div
                    className={classes.TextField_label_display}>
                    <p className={classes.Label_size}>Name:</p>
                    <TextField className={classes.TextField}
                        id="filled-read-only-input"
                        defaultValue={user.name}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="filled"
                    />
                </div>
                <div
                    className={classes.TextField_label_display}>
                    <p className={classes.Label_size}>Email:</p>
                    <TextField className={classes.TextField}
                        id="filled-read-only-input"
                        value={user.email}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="filled"
                    />
                </div>
                <div
                    className={classes.TextField_label_display}>
                    <p className={classes.Label_size}>Company Name:</p>
                    <TextField className={classes.TextField}
                        id="filled-read-only-input"
                       value={user.companyName}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="filled"
                    />
                </div>
                <div
                    className={classes.TextField_label_display}>
                    <p className={classes.Label_size}>Home Phone:</p>
                    <TextField className={classes.TextField}
                        id="filled-read-only-input"
                        defaultValue="+92321-#######"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="filled"
                    />
                </div>
                <div
                    className={classes.TextField_label_display}>
                    <p className={classes.Label_size}>Home Address:</p>
                    <TextField className={classes.TextField}
                        id="filled-multiline-static"
                        multiline
                        rows={4}
                        defaultValue="192/B, Behria Town"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="filled"
                    />
                </div>
                <div
                    className={classes.TextField_label_display}>
                    <p className={classes.Label_size}>Emergency Contact:</p>
                    <TextField className={classes.TextField}
                        id="filled-read-only-input"
                        defaultValue="+92321-######"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="filled"
                    />
                </div>
                <div
                    className={classes.TextField_label_display}>
                    <p className={classes.Label_size}>Birth Date:</p>
                    <TextField className={classes.TextField}
                        id="filled-read-only-input"
                        defaultValue="26-10-1992"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="filled"
                    />
                </div>
                <div
                    className={classes.TextField_label_display}>
                    <p className={classes.Label_size}>Job Start Date:</p>
                    <TextField className={classes.TextField}
                        id="filled-read-only-input"
                        defaultValue="01-01-2021"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="filled"
                    />
                </div>
                <div
                    className={classes.TextField_label_display}>
                    <p className={classes.Label_size}>Job Title:</p>
                    <TextField className={classes.TextField}
                        id="filled-read-only-input"
                        defaultValue="Software Engineer"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="filled"
                    />
                </div>
            </div>
        :
        null
                }
            </CardContent>
        </Card>
    )
}