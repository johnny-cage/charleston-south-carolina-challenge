const API_URL = process.env.REACT_APP_API_URL || 'https://api.github.com/orgs/boomtownroi'

const verifyResponse = async response => {
  const { status, statusText } = response

  if (status >= 200 && status < 300) {
    return response.json()
  }

  let error

  if (statusText) {
     error = new Error(statusText)
  } else {
    const { message, documentation_url } = await response.json()
    error = new Error(message) 
    error.documentation_url = documentation_url
  }
  

  error.status = status
  error.response = response

  throw error
}

const sanitizeMembersUrl = url => url.replace('{/member}', '')

const loadBoomtownOrganizationDetails = async () => {
  const organization = await fetch(API_URL)
    .then(verifyResponse)

  const {
    repos_url,
    issues_url,
    members_url,
    public_members_url,
    events_url,
    hooks_url,
  } = organization
 
  const [
    repos,
    issues,
    members,
    publicMembers,
    events,
    hooks
  ] = await Promise.all([
    fetch(repos_url).then(verifyResponse),
    fetch(issues_url).then(verifyResponse).catch(console.error),
    fetch(sanitizeMembersUrl(members_url)).then(verifyResponse),
    fetch(sanitizeMembersUrl(public_members_url)).then(verifyResponse),
    fetch(events_url).then(verifyResponse),
    fetch(hooks_url).then(verifyResponse).catch(console.error),
  ])

  return {
    ...organization,
    repos,
    issues,
    members,
    events,
    hooks,
    members,
    publicMembers
  }
}

export { loadBoomtownOrganizationDetails }
