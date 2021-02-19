import React, { useState } from 'react';
import './EventCard.css';
function EventCard(props) {
  const [isSelected, toggleSelect] = useState(false);
  const event = props.event;

  return isSelected ? (
    <div>
      <div className="event-card" onClick={e => toggleSelect(true)}>
      <img id="card-image" src={`${event.imagePath}`} alt={`${event.imagePath} not found.`}/>
      </div>

    <div className="overlay" onClick={e => toggleSelect(false)}>
        <div className="event-modal" style={{
          backgroundColor: `${props.style.bodyBackground}`,
          color: `${props.style.bodyText}`
        }}>
        <img className="event-image" src={`${event.imagePath}`} alt={`${event.imagePath} not found.`} />
          <h2 style={{ color: `${props.style.bodyText}` }}>{event.name}</h2>
          <div className="event-desc">
          <p>{event.desc}</p>
            <a style={{
              color: 'inherit',
            }}
              href={event.link}>Register</a>
            </div>
      </div>
      </div>
      </div>
  ) :
    (<div className="event-card" onClick={e => toggleSelect(true)}>
      <img id="card-image" src={`${event.imagePath}`} alt={`${event.imagePath} not found.`}/>
    </div>
    )
}

export default EventCard;