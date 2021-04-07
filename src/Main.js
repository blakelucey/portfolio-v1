import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import React from 'react';


//import Signup from '../web-pages/Signup';

//pages
import Home from './web-pages/Home.js';
import notFoundPage from './web-pages/404notFound.js';
import About from './web-pages/About.js';
import Projects from './web-pages/Projects.js';
import Contact from './web-pages/Contact.js';

const Main = () => {
  return (
    <Router>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path ='/404notFound' component ={notFoundPage} />
      <Route exact path ='/About' component={About} />
      <Route exact path ='/Projects' component={Projects} />
      <Route exact path ='/Contact' component={Contact} />


      <Redirect to='/404notFound' />
      </Switch>
    </Router>
  );
}

export default Main;
