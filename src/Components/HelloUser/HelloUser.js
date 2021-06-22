import React from 'react';
import gif from './Wave Hello GIF.gif';
import S from 'string';


const HelloUser = () => {
    const name = JSON.parse(localStorage.getItem('name')) 
    return (
        <>
            <img style={{width:'30%', height:'30%'}} src={gif} alt="hello" />
            <h1>Hello! {S(name).capitalize().s}</h1>
        </>)

}
export default HelloUser;