import React from 'react';
import { NavLink} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    navbar: {
        display: 'flex',
        alignItems: 'center',
        
        backgroundColor: '#14196b',
        color: 'white',
        fontFamily: 'Helvetica',
        fontWeight: 300,
    },
    
    navbar__title: {
        marginRight: '20px',
        fontSize: '150%',
        padding: '12px 16px',
        // cursor: 'pointer',
        verticalAlign: 'middle',
        fontWeight: 'bold'
    },
    
    navbar__item: {
        textDecoration: 'none',
        color: 'white',
        padding: '16px 16px',
        cursor: 'pointer',
        verticalAlign: 'middle',
        fontWeight: 'bold'
    },
    
    active: {
        backgroundColor: '#ffffffe8',
        color: '#14196b',
        borderRadius: '20px',
        transition: '0.5s',
      }
})

const Navbar = () => {
    const classes= useStyles();
   
    
   
    return (
        <header className={classes.navbar}>
            <div
                className={classes.navbar__title}>
                HR
            </div>
            <NavLink to="/Employeedetails"
                className={classes.navbar__item} activeClassName={classes.active}>
                {/* onClick= {()=> history.push('/Employeedetails')} */}
                Employees
            </NavLink>
            <NavLink to="/Hellouser"
                className={classes.navbar__item}
                activeClassName={classes.active}
                // onClick= {()=> history.push('/Hellouser')}
                >
                Hello_User
            </NavLink>
            
        </header>
    );
}

export default Navbar;


// {/* // className={`navbar__item ${activeItem}`}
//                 // onClick={() => {  a()}}> */}

// {/* // className={`navbar__item ${activeItemm}`}
//                 // onClick={() => { b() }}> */}                