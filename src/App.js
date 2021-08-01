import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import { AuthProvider } from './Context/AuthContext';
import Home_page from './Home_page'
import About from './About';
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path='/' component={Home_page} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute exact path='/updateProfile' component={UpdateProfile} />
          <PrivateRoute exact path='/forgot-password' component={ForgotPassword} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;