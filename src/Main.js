import react from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import React, {Component} from 'react';
import Home from './web-pages/Home.js';
import notFoundPage from './web-pages/404notFound.js';
//import Signup from '../web-pages/Signup';

//pages

const Main = () => {
  return (
    <Router>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route component ={notFoundPage} />
      </Switch>
    </Router>
  );
}

export default Main;
