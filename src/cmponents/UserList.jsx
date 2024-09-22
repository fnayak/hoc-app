import React from 'react'
import { Link } from 'react-router-dom'

const UserList = ({users}) => {
   
  return (
    <div>
        <p>User List</p>
       
        <ul>
        {
            users && users.map((user) => (
                <li key={user.id}> 
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                </li>
            ))
            }
        </ul>
    </div>
  )
}

export default UserList;