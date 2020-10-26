import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Colors from '../constants/Colors';
import {ReactComponent as BSALogo} from '../constants/main-logo.svg';
import '../css/Header.css';

class Header extends Component{
  render() {
    return (
      <div className="Header"
        style={{
          color: `${Colors.black}`,
        }}>
        <div className="NavButton">
          <Link to="/about" id="Navlink">about</Link>
        </div>
        <div className="NavButton">
          <Link to="/events" id="Navlink">events</Link>
        </div>
        
        <div className="LogoButton">
          <Link to="/" id="Navlink"><BSALogo className="Logo" /></Link>
      </div>

        <div className="NavButton">
          <Link to="/resources" id="Navlink">resources</Link>
        </div>
        
        <div className="NavButton">
        < Link to="/blog" id="Navlink">blog</Link>
        </div>
        
      </div>
    );
  }
}

export default Header;