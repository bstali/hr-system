import React from 'react';
import './Navbar.css';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    let history = useHistory()
    return (
        <header className='navbar'>
            <div
                className='navbar__title navbar__item'>
                HR
            </div>
            <div
                className='navbar__item'
                onClick={() => { history.push("/Employeedetails") }}>
                Employees
            </div>
            <div
                className='navbar__item'
                onClick={() => { history.push("/Hellouser") }}>
                Hello_User
            </div>
            
        </header>
    );
}

export default Navbar;


