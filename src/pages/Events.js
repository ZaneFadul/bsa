import React, { Component } from 'react';
import EventCard from '../bases/EventCard';
import data from '../constants/bhm_events.json';

class Events extends Component {
  componentDidMount() {
    this.props.handleRouteMet('Events');
  }
  
  render() {
    return (
      <div style={{
        color: `${this.props.style.bodyText}`,
      }}>
        <h2 style={{left:'auto'}}>Black History Month</h2>
        <div style={{
          margin: 'auto',
          display: 'flex',
          alignItems: 'center',
          width: 'auto',
          height: '15em',
          borderStyle: 'solid none solid none',
          borderWidth: '0.5em',
          borderColor:`${this.props.style.header3}`,
        }}>
          {data.bhm_events.map(item => <EventCard key={item.name} {...this.props} event={item} />)}
        </div>
      </div>
    )};
}

export default Events;