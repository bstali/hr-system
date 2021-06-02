import React from 'react';
import { makeStyles, CardContent, Avatar, Card } from '@material-ui/core';
import moment from 'moment';
import S from 'string'


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
        boxShadow: '2px 5px 7px 2px grey',
    }

})

export default function UserBasicInfo(props) {
    const classes = useStyles();
  
    return (
        <Card className={classes.cardShaddow}>
            <CardContent>
                <Avatar className={classes.avatar}>{S(props.userName.charAt(0)).capitalize().s}</Avatar>
                <div>
                    <h1>{S(props.userName).capitalize().s}</h1>
                     <p><strong>Hire date:</strong> {moment(props.joiningDate).format("MMMM Do YYYY")}</p>
                </div>
            </CardContent>
        </Card>
    )
}

//Prop Validation