import React, { Component } from 'react';
import MemberProfile from '../bases/MemberProfile';
import { isaac, chris, chelseam, chelseap } from '../constants/bios.json';

class About extends Component {

  render() {
    return (
      <div>
        <MemberProfile
          name={`${chelseam.name}`}
          title={`${chelseam.title}`}
          image={`${chelseam.imagePath}`}
          desc={`${chelseam.bio}`} />
        <MemberProfile
          name={`${chris.name}`}
          title={`${chris.title}`}
          image={`${chris.imagePath}`}
          desc={`${chris.bio}`} />
        <MemberProfile
          name={`${chelseap.name}`}
          title={`${chelseap.title}`}
          image={`${chelseap.imagePath}`}
          desc={`${chelseap.bio}`} />
        <MemberProfile
          name={`${isaac.name}`}
          title={`${isaac.title}`}
          image={`${isaac.imagePath}`}
          desc={`${isaac.bio}`} />
      </div>
    )};
}

export default About;