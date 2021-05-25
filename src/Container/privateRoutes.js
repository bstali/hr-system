import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, flag, ...rest }) => {

    return <Route {...rest} component={(props) => {
        const email = JSON.parse(localStorage.getItem('email'))
        const password = JSON.parse(localStorage.getItem('password'));
        if (email === null || password === null) {
            if (!flag) {
                return <Component {...props} />
            }
            else {
                return <Redirect to={'/login'} />
            }
        }
        else {
            if (flag) {
                return <Component {...props} />
            } else {
                return <Redirect to={'/Hellouser'} />
            }

        }
    }} />
};

export default PrivateRoute