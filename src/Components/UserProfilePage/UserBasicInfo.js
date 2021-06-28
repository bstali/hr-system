import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, CardContent, Avatar, Card } from '@material-ui/core';
import moment from 'moment';
import {useSelector} from 'react-redux';
import S from 'string';


const useStyles = makeStyles({
    
    card: {
        boxShadow: '2px 5px 7px 2px grey',
        alignItems: 'center'
    },

    avatar: {
        color: 'white',
        backgroundColor: '#14196b',
        height: '100px',
        width: '100px',
        fontSize: '70px',
        display: 'inline-flex'
    },
})

export default function UserBasicInfo(props) {
    const { employeeDetails } = useSelector(state => state.employeeDetails)
    console.log('EmployeefromStore', employeeDetails)
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Avatar className={classes.avatar}>{S(employeeDetails.name.charAt(0)).capitalize().s}</Avatar>  
                <div>
                    <h1>{S(employeeDetails.name).capitalize().s}</h1>
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