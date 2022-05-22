import React from 'react'
import PropTypes from 'prop-types'
import Member, { SHAPE } from './Member'

const MemberList = ({ public: isPublic, members }) => {
  return (
    <div>
      <h4 className="ui horizontal divider header">
      <i className="users square icon"></i>
      {isPublic && 'Public '}Members
      </h4>
      {members.length && members.map(m => <Member key={m.id} member={m} />)}
      {!members.length && <p>No members are currently available.</p>}
    </div>
  )
}
  
MemberList.propTypes = {
  public: PropTypes.bool,
  members: PropTypes.arrayOf(SHAPE)
}
  
export default MemberList