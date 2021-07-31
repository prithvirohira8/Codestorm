import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Home_page from './Home_page';
import About from './About';
import Navbar from './Navbar';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Contact from './Contact';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <>
     <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home_page} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
