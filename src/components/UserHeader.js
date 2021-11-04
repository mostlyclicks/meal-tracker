import React from 'react'

const UserHeader = (props) => {

  const user = props.user

  return (
    <div>
      <h1>{user.first_name} {user.last_name}</h1>
    </div>
  )
}

export default UserHeader
