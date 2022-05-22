import React from 'react'
import PropTypes from 'prop-types'
import Repo, { SHAPE } from './Repo'

const RepoList = ({ repos }) => {
  return (
    <div>
        <h4 className="ui horizontal divider header">
        <i className="fork icon"></i>
        Repositories
        </h4>
        {repos.length && repos.map(r => <Repo key={r.id} repository={r} />)}
        {!repos.length && <p>No repositories are currently available.</p>}
    </div>
  )
}

RepoList.propTypes = {
  repos: PropTypes.arrayOf(SHAPE).isRequired
}

export default RepoList