import React, { Component } from 'react';
import EventCard from '../bases/EventCard';
import data from '../constants/bhm_events.json';
import poster1 from '../constants/images/bhm_event_images/1.png';
import poster2 from '../constants/images/bhm_event_images/2.png';
import poster3 from '../constants/images/bhm_event_images/3.png';
import poster4 from '../constants/images/bhm_event_images/4.png';
import poster5 from '../constants/images/bhm_event_images/5.png';

class Events extends Component {
  componentDidMount() {
    this.props.handleRouteMet('Events');
  }
  
  render() {
    return (
      <div>
        <h2>Black History Month</h2>
        {data.bhm_events.map(item => <EventCard imagePath={item.imagePath}>{item.name}</EventCard>)}
      </div>
    )};
}

export default Events;