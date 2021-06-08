import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import Login from '../Components/LoginPage/Login';
import SignUp from '../Components/SignUpPage/SignUp';
import EmployeeDetails from '../Components/EmployeesPage/EmployeeDetails';
import Navbar from '../Components/NavBar/Navbar';
import HelloUser from '../Components/HelloUser/HelloUser';
import PrivateRoute from "./PrivateRoutes";
import UserProfile from '../Components/UserProfilePage/UserProfile';
import Logout from '../Components/logout/logout'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  app: {
    textAlign: 'center',
  }
})

function App(props) {
  const classes = useStyles();
  const [showNavbar, setShowNavbar] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/SignUp") {
      setShowNavbar(false)
    }
    else {
      setShowNavbar(true)
    }
  }, [location])

  return (

    <div className={classes.app}>
      {showNavbar ? <Navbar /> : null}
      <Switch>
        <Route exact path="/" render={() => { return (<Redirect to="/login" />) }} />
        <Route path="/SignUp"> <SignUp /> </Route>
        <PrivateRoute exact path="/Hellouser" component={HelloUser} flag="true" />
        <PrivateRoute exact path="/Employeedetails" component={EmployeeDetails} flag="true" className='main-nav-active' />
        <PrivateRoute exact path="/Userprofile/:id" component={UserProfile} flag="true" />
        <PrivateRoute exact path="/Logout" component={Logout} flag="true" />
        <PrivateRoute exact path="/Login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
