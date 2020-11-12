import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Events from '../pages/Events';
import Resources from '../pages/Resources';
import Blog from '../pages/Blog';
import Colors from '../constants/Colors';
import '../css/Body.css';

class Body extends Component{
  render() {
    return( 
      <div className="content-body" style={{
        backgroundColor: `${Colors.gray}`
    }}>
      <Switch> 
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/blog" component={Blog}/>
      </Switch>
    </div>
    )
  };
}

export default Body;