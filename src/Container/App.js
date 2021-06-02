import React, { useEffect, useState } from 'react'
import './App.css';
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import Login from '../Components/LoginPage/Login';
import SignUp from '../Components/SignUpPage/SignUp';
import EmployeeDetails from '../Components/EmployeesPage/EmployeeDetails';
import Navbar from '../Components/NavBar/Navbar';
import HelloUser from '../Components/HelloUser/HelloUser';
import PrivateRoute from "./PrivateRoutes";
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
        <PrivateRoute exact path="/Userprofile/:id" component={UserProfile} flag="true" />
        <PrivateRoute exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
