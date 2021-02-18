import React, { useState } from 'react';
import './EventCard.css';
function EventCard(props) {
  const [isSelected, toggleSelect] = useState(false);
  
  return isSelected ? (
    <div>POOPIE</div>
  ) :
    (<div className="event-card" onClick={e => toggleSelect(true)}>
      <img className="event-image" src={`${props.imagePath}`} alt={`${props.imagePath} not found.`}/>
    </div>
    )
}

export default EventCard;