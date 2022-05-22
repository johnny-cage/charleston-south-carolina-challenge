import React from 'react'
import PropTypes from 'prop-types'

const SHAPE = PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  repo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  created_at: PropTypes.string.isRequired
}).isRequired

const Event = ({ event }) => {
  const {
    id,
    type,
    repo,
    created_at
  } = event

  return (
    <table className="ui definition table">
      <tbody>
        <tr>
          <td className="two wide column">Id</td>
          <td>{id}</td>
        </tr>
        <tr>
          <td>Type</td>
          <td>{type}</td>
        </tr>
        <tr>
          <td>Repository Id</td>
          <td>{repo.id}</td>
        </tr>
        <tr>
          <td>Repository Name</td>
          <td>{repo.name}</td>
        </tr>
        <tr>
          <td>Repository API Url</td>
          <td>{repo.url}</td>
        </tr>
        <tr>
          <td>Created At</td>
          <td>{created_at}</td>
        </tr>
      </tbody>
    </table>
  )
}

Event.propTypes = {
  event: SHAPE
}

export { SHAPE }
    
export default Event