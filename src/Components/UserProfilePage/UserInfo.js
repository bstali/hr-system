import React from 'react';
import { makeStyles, CardContent, Card, TextField } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        width: '100%',
        boxShadow: '2px 5px 7px 2px grey',
        alignItems: 'center',
        marginTop: '-10px'
    },

    TextField: {
        width: '300px',
        height: '35px',
        marginTop: '10px',
        backgroundColor: '#a1a0a093'
    },

    Address_TextField: {
        width: '300px',
        marginBottom: '4px',
        marginTop: '10px',
        backgroundColor: '#a1a0a093'
    },

    TextField_label_display: {
        display: 'flex',
    },

    Label_size: {

        width: '250px',
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        marginTop: '17px',
        marginRight: '20px'
    },

})

export default function UserInfo(props) {
    const classes = useStyles();
    const user = props.userDetail

    return (
        <Card className={classes.card}>
           
            <CardContent>
                {user ?
                    <div>
                        <div
                            className={classes.TextField_label_display}>
                            <span className={classes.Label_size}>Employee ID</span>
                            <TextField
                                id="outlined-read-only-input"
                                value={user.id}
                                InputProps={{
                                    readOnly: true,
                                    className: classes.TextField
                                }}
                                variant="outlined"
                            />
                        </div>
                        <div
                            className={classes.TextField_label_display}>
                            <span className={classes.Label_size}>Name</span>
                            <TextField
                                id="outlined-read-only-input"
                                value={user.name}
                                InputProps={{
                                    readOnly: true,
                                    className: classes.TextField
                                }}
                                variant="outlined"
                            />
                        </div>
                        <div
                            className={classes.TextField_label_display}>
                            <span className={classes.Label_size}>Email</span>

                            <TextField
                                id="outlined-read-only-input"
                                value={user.email}
                                InputProps={{
                                    readOnly: true,
                                    className: classes.TextField
                                }}
                                variant="outlined"
                            />
                        </div>
                        <div
                            className={classes.TextField_label_display}>
                            <span className={classes.Label_size}>Company Name</span>
                            <TextField
                                id="outlined-read-only-input"
                                value={user.companyName}
                                InputProps={{
                                    readOnly: true,
                                    className: classes.TextField
                                }}
                                variant="outlined"
                            />
                        </div>
                        <div
                            className={classes.TextField_label_display}>
                            <span className={classes.Label_size}>Home Phone</span>
                            <TextField
                                id="outlined-read-only-input"
                                value="+92321-#######"
                                InputProps={{
                                    readOnly: true,
                                    className: classes.TextField
                                }}
                                variant="outlined"
                            />
                        </div>
                        <div
                            className={classes.TextField_label_display}>
                            <span className={classes.Label_size}>Home Address</span>
                            <TextField
                                id="outlined-read-only-input"
                                multiline
                                rows={4}
                                value="192/B, Behria Town"
                                InputProps={{
                                    readOnly: true,
                                    className: classes.Address_TextField
                                }}
                                variant="outlined"
                            />
                        </div>
                        <div
                            className={classes.TextField_label_display}>
                            <span className={classes.Label_size}>Emergency Contact</span>
                            <TextField
                                id="outlined-read-only-input"
                                value="+92321-######"
                                InputProps={{
                                    readOnly: true,
                                    className: classes.TextField
                                }}
                                variant="outlined"
                            />
                        </div>
                        <div
                            className={classes.TextField_label_display}>
                            <span className={classes.Label_size}>Birth Date</span>
                            <TextField
                                id="outlined-read-only-input"
                                value="26-10-1992"
                                InputProps={{
                                    readOnly: true,
                                    className: classes.TextField
                                }}
                                variant="outlined"
                            />
                        </div>
                        <div
                            className={classes.TextField_label_display}>
                            <span className={classes.Label_size}>Job Start Date</span>
                            <TextField
                                id="outlined-read-only-input"
                                value="01-01-2021"
                                InputProps={{
                                    readOnly: true,
                                    className: classes.TextField
                                }}
                                variant="outlined"
                            />
                        </div>
                        <div
                            className={classes.TextField_label_display}>
                            <span className={classes.Label_size}>Job Title</span>
                            <TextField
                                id="outlined-read-only-input"
                                value="Software Engineer"
                                InputProps={{
                                    readOnly: true,
                                    className: classes.TextField
                                }}
                                variant="outlined"
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