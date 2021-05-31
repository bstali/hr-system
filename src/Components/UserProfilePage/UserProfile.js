import React from 'react';
import Grid from '@material-ui/core/Grid';
import UserBasicInfo from './UserBasicInfo';
import UserDetailsTabs from './UsersDetailsTabs'
export default function UserProfile() {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
        >
            <Grid item sm={1}></Grid>
            
               
                    <Grid item sm={3}>
                        <UserBasicInfo />
                    </Grid>
                    <Grid item sm={7}>
                        <UserDetailsTabs />
                    </Grid>
                
            
            <Grid item sm={1}></Grid>
        </Grid>
    )
}