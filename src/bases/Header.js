import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BSALogo } from '../constants/main-logo.svg';
import App from '../App';
import '../css/Header.css';

class Header extends Component{
  
  render() {
    const style = this.props.style;
    return (
      <div className="Header"
        style={{
          color: `${style.header}`,
        }}>
        <div className="NavButton">
          <Link to="/about" id="Navlink" style={{ color: `${style.header1}` }}>about</Link>
        </div>
        <div className="NavButton">
          <Link to="/events" id="Navlink"  style={{ color: `${style.header2}` }}>events</Link>
        </div>
        
        <div className="LogoButton">
          <Link to="/" id="Navlink" ><BSALogo className="Logo" /></Link>
      </div>

        <div className="NavButton">
          <Link to="/resources" id="Navlink" style={{ color: `${style.header3}` }}>resources</Link>
        </div>
        
        <div className="NavButton">
        < Link to="/blog" id="Navlink" style={{ color: `${style.header4}` }}>blog</Link>
        </div>
        
      </div>
    );
  }
}

export default Header;