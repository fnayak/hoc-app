import React, { useState, useEffect } from 'react'
import withLoading from '../hocs/withLoading';
import UserList from '../cmponents/UserList';
import axios from 'axios';

const HomePage = () => {

  const [users, setUsers] = useState(null)
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const UserListWithLoading = withLoading(UserList);


  const GET_ALL_USERS_API = 'https://jsonplaceholder.typicode.com/users'

  const fetchAllUsers = async () => {
      try {
          const response = await axios.get(GET_ALL_USERS_API);
          console.log(response.data);
          setUsers(response.data);
          setIsLoading(false)
      } catch(error) {
          console.error(error)
          setError(true)
      }
  }

  useEffect(() => {
      fetchAllUsers();
  }, [] );

  

  return (
    <UserListWithLoading users={users} isLoading={isLoading} />
  )
}

export default HomePage