import React from 'react'
import PropTypes from 'prop-types'

const SHAPE = PropTypes.shape({
  id: PropTypes.number.isRequired,
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  site_admin: PropTypes.bool.isRequired
}).isRequired   

const Member = ({ member }) => {
  const {
    id,
    login,
    avatar_url,
    html_url,
    type,
    site_admin
  } = member

  return (
    <table className="ui definition table">
      <tbody>
        <tr>
            <td className="two wide column">Id</td>
            <td>{id}</td>
        </tr>
        <tr>
            <td>Login</td>
            <td><a href={html_url}>{login}</a></td>
        </tr>
        <tr>
            <td>Avatar</td>
            <td><img alt="member avatar" src={avatar_url} /></td>
        </tr>
        <tr>
            <td>Type</td>
            <td>{type}</td>
        </tr>
        <tr>
            <td>Site Admin</td>
            <td>{site_admin ? 'Yes' : 'No'}</td>
        </tr>
      </tbody>
    </table>
  )
}

Member.propTypes = {
  member: SHAPE
}

export { SHAPE }
export default Member