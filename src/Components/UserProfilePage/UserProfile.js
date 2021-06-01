import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { get } from 'lodash'
import Grid from '@material-ui/core/Grid';
import UserBasicInfo from './UserBasicInfo';
import UserDetailsTabs from './UsersDetailsTabs'

export default function UserProfile(props) {

    const [user, setUser] = useState(null);
    const [circularProgress, setCircularProgress] = useState(false)


    useEffect(() => {
        setCircularProgress(true)
        axios.get('https://60895cb08c8043001757ea35.mockapi.io/api/user/5')
            .then(response => {
                const user = response.data;
                setUser(user)
                setCircularProgress(false)
            });
    }, []);

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
        >
            <Grid item sm={1}></Grid>

            <Grid item sm={3}>
                <UserBasicInfo
                    userName={get(user, 'name', '')}
                    joiningDate={new Date()} />
            </Grid>
            <Grid item sm={7} >
                <UserDetailsTabs
                    userDetail={user}
                />
            </Grid>

            <Grid item sm={1}></Grid>
        </Grid>
    )
}