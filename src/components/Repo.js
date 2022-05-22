import React from 'react'
import PropTypes from 'prop-types'

const SHAPE = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  description: PropTypes.string,
  language: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
  pushed_at: PropTypes.string.isRequired
})

const Repo = ({ repository }) => {
  const {
    id,
    name,
    html_url,
    description,
    language,
    created_at,
    updated_at,
    pushed_at
  } = repository

  return (
    <table className="ui definition table">
      <tbody>
        <tr>
          <td className="two wide column">Id</td>
          <td>{id}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td><a href={html_url}>{name}</a></td>
        </tr>
        <tr>
          <td>Description</td>
          <td>{description}</td>
        </tr>
        <tr>
          <td>Language</td>
          <td>{language}</td>
        </tr>
        <tr>
          <td>Created At</td>
          <td>{created_at}</td>
        </tr>
        <tr>
          <td>Updated At</td>
          <td>{updated_at}</td>
        </tr>
        <tr>
          <td>Pushed At</td>
          <td>{pushed_at}</td>
        </tr>
      </tbody>
    </table>
  )
}

Repo.propTypes = {
  repository: SHAPE
}

export { SHAPE }

export default Repo

