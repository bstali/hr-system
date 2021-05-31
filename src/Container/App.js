import React, { useEffect, useState } from 'react'
import './App.css';
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import Login from '../Components/Login_Page/login';
import SignUp from '../Components/SignUp_Page/signup';
import EmployeeDetails from '../Components/Employees_Page/employeeDetails';
import Navbar from '../Components/NavBar/navbar';
import HelloUser from '../Components/HelloUser/hellouser';
import PrivateRoute from "./privateRoutes";
import UserProfile from '../Components/UserProfilePage/UserProfile';


function App(props) {

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

    <div className="App">
      {showNavbar ? <Navbar /> : null}
      <Switch>
        <Route exact path="/" render={() => { return (<Redirect to="/login" />) }} />
        <Route path="/SignUp"> <SignUp /> </Route>
        <PrivateRoute exact path="/Hellouser" component={HelloUser} flag="true" />
        <PrivateRoute exact path="/Employeedetails" component={EmployeeDetails} flag="true" />
        <PrivateRoute exact path="/Userprofile" component={UserProfile} flag="true" />
        <PrivateRoute exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
