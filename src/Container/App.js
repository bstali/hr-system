import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Login from '../Components/Login_Page/login';
import SignUp from '../Components/Signup_Page/signup';
import HelloUsers from '../Components/HelloUsers/helloUsers';


function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (

                <Redirect to="/login" />

              )
            }}
          />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/helloUsers">
            <HelloUsers/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
