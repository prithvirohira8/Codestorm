import React from 'react';
import Signup from './Signup';
import Students_login from './Students_login';
import Teachers_login from './Teachers_login';
import Students_dashboard from './Students_dashboard';
import Teachers_dashboard from './Teachers_dashboard';
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
          <PrivateRoute exact path='/students_dashboard' component={Students_dashboard} />
          <PrivateRoute exact path='/teachers_dashboard' component={Teachers_dashboard} />
          <PrivateRoute exact path='/updateProfile' component={UpdateProfile} />
          <Route exact path='/forgot-password' component={ForgotPassword} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/students_login" component={Students_login} />
          <Route exact path="/teachers_login" component={Teachers_login} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
