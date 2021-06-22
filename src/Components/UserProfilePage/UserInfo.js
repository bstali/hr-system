import React from 'react';
import { makeStyles, CardContent, Card, TextField } from '@material-ui/core';
import {useSelector} from 'react-redux';

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

    homeAddress_TextField: {
        width: '300px',
        marginBottom: '4px',
        marginTop: '10px',
        backgroundColor: '#a1a0a093'
    },
    
    homeAddress_label_size: {
        width: '250px',
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        marginTop: '28px',
        marginRight: '20px'
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
const {employeeDetails} = useSelector(state => state.employeeDetails)
    const classes = useStyles();
    const employee = employeeDetails;

    return (
        <Card className={classes.card}>
           
            <CardContent>
                {employee ?
                    <div>
                        <div
                            className={classes.TextField_label_display}>
                            <span className={classes.Label_size}>Employee ID</span>
                            <TextField
                                
                                value={employee.id}
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
                                value={employee.name}
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
                                value={employee.email}
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
                                value={employee.companyName}
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
                            <span className={classes.homeAddress_label_size}>Home Address</span>
                            <TextField
                                multiline
                                rows={4}
                                value="192/B, Behria Town"
                                InputProps={{
                                    readOnly: true,
                                    className: classes.homeAddress_TextField
                                }}
                                variant="outlined"
                            />
                        </div>
                        <div
                            className={classes.TextField_label_display}>
                            <span className={classes.Label_size}>Emergency Contact</span>
                            <TextField
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