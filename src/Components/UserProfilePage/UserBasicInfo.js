import React from 'react';
import {makeStyles,CardContent, Avatar,Card} from '@material-ui/core';

const useStyles = makeStyles({
avatar: {
    color: 'white',
    backgroundColor: '#14196b',
    marginLeft: '30%',
    height: '100px',
    width: '100px',
    fontSize: '70px'
},


})

export default function UserProfile() {
    const classes = useStyles();
    return(
    <Card >
        <CardContent>
            <Avatar className={classes.avatar}>H</Avatar>
            <div>
                <h1>Hassan Ajaz</h1>
                <h3>Hire date:</h3>
            </div>
        </CardContent>
    </Card>
    )}

//Prop Validation