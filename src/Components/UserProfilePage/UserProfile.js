import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Grid, makeStyles} from '@material-ui/core';
import UserBasicInfo from './UserBasicInfo';
import UserDetailsTabs from './UsersDetailsTabs';
import CircularProgress from '../CircularProgress/CircularProgress';
import {useDispatch} from 'react-redux';
import {employeeDetailsAction} from '../../actions/employeeDetailsAction';

const useStyles = makeStyles({
    loaderPlacement:{
        marginLeft:650,
        marginTop:250
    }
})
export default function UserProfile(props) {
    const classes = useStyles();
    const userId = props.match.params.id
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://60895cb08c8043001757ea35.mockapi.io/api/user/${userId}`)
            .then(response => {
                const user = response.data;
                dispatch(employeeDetailsAction(user))
                setUser(user)
                
                
            });
    }, [userId, dispatch]);

    return (
        <div>
            { user ?
                (<Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                >

                    <Grid item sm={1}></Grid>

                    <Grid item sm={3}>

                        <UserBasicInfo
                            // userName={get(user, 'name', '')}
                            joiningDate={new Date()} />
                    </Grid>
                    <Grid item sm={7} >
                        <UserDetailsTabs
                            // userDetail={user}
                        />
                    </Grid>

                    <Grid item sm={1}></Grid>
                </Grid>) : (<div className={classes.loaderPlacement}><CircularProgress /></div>)
            } </div>
    )
}

