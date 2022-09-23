import React from 'react'

const EventList = (props) => {

  const {items} = props;
  return (
    <ul>
    {items.map()}
    
    </ul>
  )
}

export default EventList
