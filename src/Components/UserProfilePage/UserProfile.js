import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { get } from 'lodash'
import Grid from '@material-ui/core/Grid';
import UserBasicInfo from './UserBasicInfo';
import UserDetailsTabs from './UsersDetailsTabs'
import { CircularProgress } from '@material-ui/core';

export default function UserProfile(props) {
    console.log(props,"kkkkk")
const id =props.match.params.id
console.log(id,"iiiiiiiiiiiiii")
    const [user, setUser] = useState(null);
    const [circularProgress, setCircularProgress] = useState(false)


    useEffect(() => {
        setCircularProgress(true)
        axios.get(`https://60895cb08c8043001757ea35.mockapi.io/api/user/${id}`)
            .then(response => {
                const user = response.data;
                setUser(user)
                setCircularProgress(false)
            });
    }, []);

    return (
        <div>
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
        </div>
    )
}