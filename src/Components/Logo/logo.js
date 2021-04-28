import React from 'react';

import Logo from '../../Assets/images/logo.jpg';
import './logo.css'

const logo = (props) => (
    <div className="Logo" style={{height: props.height}}>
        <img src= {Logo} alt="HR-Syetem"></img>
    </div>
)

export default logo;