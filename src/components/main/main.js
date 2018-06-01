import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "../home/home";
import Skills from "../skills/skills";
import Portfolio from "../portfolio/portfolio";
import Contacts from "../contacts/contacts";

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/skills' component={Skills}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/contacts' component={Contacts}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
