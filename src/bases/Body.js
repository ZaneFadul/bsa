import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Events from '../pages/Events';
import Resources from '../pages/Resources';
import Blog from '../pages/Blog';
import '../css/Body.css';
import Colors from '../constants/Colors';

class Body extends Component{
  constructor(props) {
    super(props);
    this.state = {
      page: "Home"
    };
    this.handleRouteMet = this.handleRouteMet.bind(this);
  }

  handleRouteMet = (newPage) => {
    this.setState({
      page: newPage
    });
  }

  render() {

    if (this.state.page === 'Events') this.props.changeStyleTo(Colors['bhm']);
    else this.props.changeStyleTo(Colors['main']);

    return( 
      <Switch> 
          <Route exact path="/">
          <Home {...this.props} handleRouteMet={this.handleRouteMet} />
            </Route>
          <Route exact path="/about">
            <About {...this.props} handleRouteMet={this.handleRouteMet} />
            </Route>
          <Route exact path="/events">
              <Events {...this.props} handleRouteMet={this.handleRouteMet} />
            </Route>
          <Route exact path="/resources">
            <Resources {...this.props} handleRouteMet={this.handleRouteMet} />
            </Route>
          <Route exact path="/blog">
            <Blog {...this.props} handleRouteMet={this.handleRouteMet} />
            </Route>
      </Switch>
    )
  };
}

export default Body;