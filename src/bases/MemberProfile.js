import React, { Component } from 'react';

class MemberProfile extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt={`${this.props.image} not found.`} style={{
          width: '12em', height: '12em'
        }} />
        <h3>{this.props.name}</h3>
        <h2>{this.props.title}</h2>
        <p style={{
          "textAlign": "justify",
          paddingBottom:"2em"
        }}>
          {this.props.desc}
        </p>
      </div>
    );
  }
};

export default MemberProfile;