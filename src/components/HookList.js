import React from 'react'

const HookList = () => {
  return (
    <div>
      <h4 className="ui horizontal divider header">
      <i className="phone square icon"></i>
      Hooks
      </h4>
      <div className="ui warning icon message">
        <i className="inbox icon"></i>
        <div className="content">
          <div className="header">Hooks are currently unavailable</div>
          <p>Most likely due to an authorization related issue.</p>
        </div>
      </div>
    </div>
  )
}
  
  export default HookList