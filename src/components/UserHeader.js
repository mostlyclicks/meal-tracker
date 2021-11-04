import React from 'react'

const UserHeader = (props) => {

  const user = props.user

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-600">{user.first_name} {user.last_name}</h1>
      
    </div>
  )
}

export default UserHeader
