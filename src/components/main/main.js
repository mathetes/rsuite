import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './main.css';
import Home from "../home/home";
import Skills from "../skills/skills";
import Resume from "../resume/resume";
import Portfolio from "../portfolio/portfolio";
import About from "../about/about";
import Contacts from "../contacts/contacts";

class Main extends Component {
  render() {
    return (
      <div className="main-wraper">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/skills' component={Skills}/>
          <Route path='/resume' component={Resume}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/About' component={About}/>
          <Route path='/contacts' component={Contacts}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
