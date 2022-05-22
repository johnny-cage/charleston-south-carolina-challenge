import React from 'react'
import PropTypes from 'prop-types'

const Organization = ({ organization }) => {
  const {
    id,
    name,
    html_url,
    is_verified,
    created_at,
    updated_at,
    avatar_url
  } = organization

  return (
    <div>
      <h4 className="ui horizontal divider header">
      <i className="bomb icon"></i>
      Welcome to Boomtown
      </h4>
      <table className="ui definition table">
        <tbody>
          <tr>
            <td className="two wide column">Id</td>
            <td>{id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>HTML URL</td>
            <td>{html_url}</td>
          </tr>
          <tr>
            <td>Is Verified</td>
            <td>{is_verified ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <td>Avatar</td>
            <td><img alt="organization avatar" src={avatar_url} /></td>
          </tr>
          <tr>
              <td>Created At</td>
              <td>
                  {created_at}&nbsp;
                  {created_at > updated_at && <a href="#" className="ui teal tag label">Most Recent</a>}
              </td>
          </tr>
          <tr>
              <td>Updated At</td>
              <td>
                  {updated_at}&nbsp;
                  {updated_at > created_at && <a href="#" className="ui red tag label">Most Recent</a>}
              </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

Organization.propTypes = {
  organization: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    is_verified: PropTypes.bool.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired
  }).isRequired
}

export default Organization