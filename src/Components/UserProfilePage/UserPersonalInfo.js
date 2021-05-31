import React from 'react';
import { makeStyles, CardContent, Card, TextField, Tab } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        width: '100%',
    },

    TextField: {
        width: '100%',
        marginBottom: '10px',

    },

    TextField_label_display: {
        display: 'flex',
    },

    Label_size: {
        width: '20ch',
        marginLeft: 0,
        fontWeight: 'bold',
        marginTop: '20px'
    },

})

export default function UserProfile() {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <div
                    className={classes.TextField_label_display}>
                    <p className={classes.Label_size}>Employee ID:</p>
                    <TextField className={classes.TextField}
                        id="filled-read-only-input"
                        defaultValue="1"
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
                        defaultValue="Hassan Ajaz"
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
                        defaultValue="hassan@gmail.com"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="filled"
                    />
                </div>
                <div
                    className={classes.TextField_label_display}>
                    <p className={classes.Label_size}>Work Phone:</p>
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
                    <p className={classes.Label_size}>Home Phone:</p>
                    <TextField className={classes.TextField}
                        id="filled-read-only-input"
                        defaultValue=""
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
                        defaultValue="192/B Behria Town"
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
                        defaultValue="+92321-#######"
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
                        defaultValue="27-Oct-1992"
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
                        defaultValue="02-01-2021"
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
                        defaultValue="CEO"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="filled"
                    />
                </div>
                <div
                    className={classes.TextField_label_display}>
                    <p className={classes.Label_size}>Time Off Approver:</p>
                    <TextField className={classes.TextField}
                        id="filled-read-only-input"
                        defaultValue=""
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="filled"
                    />
                </div>
            </CardContent>
        </Card>
    )
}