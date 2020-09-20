import React, { Component } from 'react';
import Colors from '../constants/Colors';

class Body extends Component {
  render() {
    return (
      <div className="Body">
        {this.props.content}
      </div>
    );
  }
}

export default Body;