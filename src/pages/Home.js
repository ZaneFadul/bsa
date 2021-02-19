import React, { Component } from 'react';
import ContentWrapper from '../bases/ContentWrapper';

class Home extends Component {
  componentDidMount() {
    this.props.handleRouteMet('Home');
  }
  render() {
    return (
      <ContentWrapper {...this.props} content={
        <p>
          The Black Student Association is a student organization unoffically affiliated with NYU Shanghai,
        where our goal is to provide resources and support to our fellow Black students.</p>
      }/>
  )};
}

export default Home;