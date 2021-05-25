import React from 'react';
import './navbar.css'
import { useHistory } from 'react-router-dom';

const Navbar = () => {
let history=useHistory()
    return (
        <header className='navbar'>
            <div className='navbar__title navbar__item' style={{ color: 'white', textDecoration: 'none' }}>HR</div>
            <div onClick={()=>{history.push("/Employeedetails")}} className='navbar__item' style={{ color: 'white', textDecoration: 'none' }}>Employees</div>
            <div onClick={()=>{history.push("/Hellouser")}} className='navbar__item' style={{ color: 'white', textDecoration: 'none' }}>Hello_User</div>
        </header>
    );
}

export default Navbar;


