import React from 'react'
import './index.css'

const EventItem = (props) => {
    const {eventDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }
  return (
    <li className={`event-card ${id}`}>
        <button onClick={onClickEvent} className='event-button'>
            <img src={imageUrl} alt={name} className={eventImageClassName}/>
        </button>
      
      <h3 className='event-name'>{name}</h3>
      <p className='event-location'>{location}</p>
    </li>
  )
}

export default EventItem
