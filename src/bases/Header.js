import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Colors from '../constants/Colors';
import {ReactComponent as BSALogo} from '../constants/logo.svg';
import '../css/Header.css';

class Header extends Component{
  render() {
    return (
      <div className="Header"
        style={{
          color: `${Colors.black}`,
        }}>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/"><BSALogo className="Logo"/></Link>
        <Link to="/resources">Resources</Link>
        <Link to="/blog">Blog</Link>
      </div>
    );
  }
}

export default Header;