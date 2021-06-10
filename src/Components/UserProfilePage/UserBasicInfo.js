import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, CardContent, Avatar, Card } from '@material-ui/core';
import moment from 'moment';
import S from 'string';
import {useSelector} from 'react-redux';


const useStyles = makeStyles({
    
    card: {
        boxShadow: '2px 5px 7px 2px grey',
    },

    avatar: {
        color: 'white',
        backgroundColor: '#14196b',
        marginLeft: '30%',
        height: '100px',
        width: '100px',
        fontSize: '70px',
    },
})

export default function UserBasicInfo(props) {
    const { userDetails } = useSelector(state => state.userDetails)
    console.log('UserfromStore', userDetails)
    const classes = useStyles();
 console.log('user basic info props', props)
    return (
        <Card className={classes.card}>
            <CardContent>
                <Avatar className={classes.avatar}>{S(userDetails.name.charAt(0)).capitalize().s}</Avatar>
                <div>
                    <h1>{S(userDetails.name).capitalize().s}</h1>
                    <p><strong>Hire date:</strong> {moment(props.joiningDate).format("MMMM Do YYYY")}</p>
                </div>
            </CardContent>
        </Card>
    )
}

//Prop Validation
UserBasicInfo.propTypes = {
    userName: PropTypes.string,
    joiningDate:PropTypes.instanceOf(Date)
  };