import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import withLoading from '../hocs/withLoading';
import UserDetail from '../cmponents/UserDetail';
import axios from 'axios';

const UserDetailPage = () => {

    const { userId } = useParams();
    const [user, setUser] = useState(null)
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const UserDetaillsWithLoading = withLoading(UserDetail);
    
    const GET_USER_API = `https://jsonplaceholder.typicode.com/users/${userId}`

    const fetchUser = async () => {
        try {
            const response = await axios.get(GET_USER_API);
            setUser(response.data);
            setIsLoading(false)
        } catch(error) {
            console.error(error)
            setError(true)
        }
    }

    useEffect(() => {
        fetchUser();
    }, [userId] );

  return (
    <UserDetaillsWithLoading user={user} isLoading={isLoading} />
  )
}

export default UserDetailPage;