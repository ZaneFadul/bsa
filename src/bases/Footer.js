import React, { Component } from 'react';
import { ReactComponent as FBIcon } from '../constants/socialsvgs/fbicon.svg';
import { ReactComponent as IGIcon } from '../constants/socialsvgs/igicon.svg';
import { ReactComponent as DiscIcon } from '../constants/socialsvgs/discicon.svg';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <a href="https://www.facebook.com"><FBIcon className="icon"/></a>
        <a href="https://www.instagram.com"><IGIcon className="icon"/></a>
        <a href="https://discord.com"><DiscIcon className="icon" /></a>
      </div>
    );
  }
}

export default Footer;