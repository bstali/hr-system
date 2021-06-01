import React from 'react';
import { makeStyles, CardContent, Avatar, Card } from '@material-ui/core';
import moment from 'moment';

const useStyles = makeStyles({
    avatar: {
        color: 'white',
        backgroundColor: '#14196b',
        marginLeft: '30%',
        height: '100px',
        width: '100px',
        fontSize: '70px',
    },
    cardShaddow:{
        boxShadow: '2px 5px 10px grey'
    }

})

export default function UserBasicInfo(props) {

    console.log(props.userName, props.joiningDate)
    const classes = useStyles();
  

    return (
        <Card className={classes.cardShaddow}>
            <CardContent>
                <Avatar className={classes.avatar}>{props.userName.charAt(0)}</Avatar>
                <div>
                    <h1>{props.userName}</h1>
                    <h3>Hiring date:{moment(props.joiningDate).format("MMMM Do YYYY")}</h3>
                </div>
            </CardContent>
        </Card>
    )
}

//Prop Validation