import React from 'react';
import gif from './Wave Hello GIF.gif';

const HelloUser = () => {
    const email = JSON.parse(localStorage.getItem('email')) 
    // const password = JSON.parse(localStorage.getItem('password'))
    return (
        <>
            <img style={{width:'30%', height:'30%'}} src={gif} alt="hello" />
            <h1>{email}</h1>
        </>)

}
export default HelloUser;