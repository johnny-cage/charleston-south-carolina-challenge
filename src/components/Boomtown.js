import React, { useState, useEffect } from 'react'
import { loadBoomtownOrganizationDetails } from '../api'
import Organization from './Organization'
import RepoList from './RepoList'
import IssueList from './IssueList'
import MemberList from './MemberList'
import EventList from './EventList'
import HookList from './HookList'

const Boomtown = () => {
  const [org, setOrg] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    loadBoomtownOrganizationDetails()
      .then(boomtown => setOrg(boomtown))
      .catch(e => setError(e))
  }, [])

  if (error) {
    return (
      <div className="ui negative message">
        <i className="close icon"></i>
        <div className="header">An error occurred while contacting the server.</div>
        {typeof error === 'string' &&  <p>{error}</p> }
        {error.message && <p>{error.message}</p>}
        {error.documentation_url && <p>{error.documentation_url}</p>}
      </div>
    )
  }

  if (org) {
    console.log('org', org)
    
    const { 
      id,
      name,
      html_url,
      is_verified,
      created_at,
      updated_at,
      repos,
      issues,
      members,
      events,
      hooks,
      avatar_url,
      publicMembers
    } = org

    const organization = {
      id,
      name,
      html_url,
      is_verified,
      created_at,
      updated_at,
      avatar_url
    }
    return (
      <div className="ui">
        <section>
          <Organization organization={organization} />
        </section>
        <section>
          <RepoList repos={repos} />
        </section>
        <section>
          <IssueList issues={issues} />
        </section>
        <section>
          <MemberList members={members} />
        </section>
        <section>
          <MemberList public={true} members={publicMembers} />
        </section>
        <section>
          <EventList events={events} />
        </section>
        <section>
          <HookList hooks={hooks} />
        </section>
      </div>
    )
  }

  return (
    <div className="ui icon message">
      <i className="notched circle loading icon"></i>
      <div className="content">
        <div className="header">Just one second</div>
        <p>We're fetching that content for you.</p>
      </div>
    </div>
  )
}

export default Boomtown
