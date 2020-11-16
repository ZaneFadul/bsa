import React, { Component } from 'react';
import { ReactComponent as IGIcon } from '../constants/socialsvgs/igicon.svg';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <a href="https://www.instagram.com/shanghai.bsa/"><IGIcon className="icon"/></a>
      </div>
    );
  }
}

export default Footer;