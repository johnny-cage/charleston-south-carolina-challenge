import React from 'react'

const IssueList = () => {
  return (
    <div>
      <h4 className="ui horizontal divider header">
      <i className="bug icon"></i>
      Issues
      </h4>
      <div className="ui warning icon message">
        <i className="inbox icon"></i>
        <div className="content">
            <div className="header">
            Issues are currently unavailable
            </div>
            <p>Most likely due to an authorization related issue.</p>
        </div>
      </div>
    </div>
  )
}

export default IssueList