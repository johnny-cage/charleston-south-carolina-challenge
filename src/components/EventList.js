import React from 'react'
import PropTypes from 'prop-types'
import Event, { SHAPE } from './Event'

const EventList = ({ events }) => {
  return (
    <div>
      <h4 className="ui horizontal divider header">
      <i className="calendar icon"></i>
      Events
      </h4>
      {events.length && events.map(e => <Event key={e.id} event={e} />)}
      {!events.length && <p>No events are currently available.</p>}
    </div>
  )
}

EventList.propTypes = {
  events: PropTypes.arrayOf(SHAPE).isRequired
}

export default EventList