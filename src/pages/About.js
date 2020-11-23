import React, { Component } from 'react';
import MemberProfile from '../bases/MemberProfile';
import { isaac, chris, chelseam, chelseap } from '../constants/bios.json';

import chelseam_img from '../constants/images/chelsea_m.png';
import chris_img from '../constants/images/chris.png';
import chelseap_img from '../constants/images/chelsea_p.png';
import isaac_img from '../constants/images/isaac.png';

class About extends Component {

  render() {
    return (
      <div>
        <MemberProfile
          name={`${chelseam.name}`}
          title={`${chelseam.title}`}
          image={`${chelseam_img}`}
          desc={`${chelseam.bio}`} />
        <MemberProfile
          name={`${chris.name}`}
          title={`${chris.title}`}
          image={`${chris_img}`}
          desc={`${chris.bio}`} />
        <MemberProfile
          name={`${chelseap.name}`}
          title={`${chelseap.title}`}
          image={`${chelseap_img}`}
          desc={`${chelseap.bio}`} />
        <MemberProfile
          name={`${isaac.name}`}
          title={`${isaac.title}`}
          image={`${isaac_img}`}
          desc={`${isaac.bio}`} />
      </div>
    )};
}

export default About;