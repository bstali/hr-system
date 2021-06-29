import React from 'react';
import img from './logo.png';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    logo:{
        height:'40px',
        width: '80px',
        paddingTop: 0
    }
})
const Logo = () => {
    const classes = useStyles();
    return ( 
        <img  className={classes.logo} src={img} alt="logo"/>
     );
}
 
export default Logo;