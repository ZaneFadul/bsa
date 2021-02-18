import React, { Component } from 'react';

class Blog extends Component {
  componentDidMount() {
    this.props.handleRouteMet('Blog');
  }
  render(){return (
    <div>
      <h>Blog section under construction.</h>
    </div>
  )};
}

export default Blog;