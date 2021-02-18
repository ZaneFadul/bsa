import React, { Component } from 'react';

class Home extends Component {
  componentDidMount() {
    this.props.handleRouteMet('Home');
  }
  render() {
    return (
    <div>
        <p>
        The Black Student Association is a student organization unoffically affiliated with NYU Shanghai,
        where our goal is to provide resources and support to our fellow Black students.</p>
        
    </div>
  )};
}

export default Home;