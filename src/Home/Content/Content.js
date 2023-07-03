import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Content.css';
import Loader from './Loader';
const Content = ({isLoading, setIsLoading}) => {
    const [users, setUsers] = useState([]);
    //api fetch using axios
    const fetchUsers = async () => {
        try {
            
          const response = await axios.get('https://reqres.in/api/users?page=1');
          setUsers(response.data.data);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        if (isLoading) {
          fetchUsers();
        }
        // eslint-disable-next-line
      }, [isLoading]);
     
   
    return (
        <>
         <div className='main-container'>
         {isLoading ? null : <label>Click on the "Get Users" Button to collect the data.</label>}
        {isLoading ? (
          <Loader />
        ) : (
          <div className='contents' >
            {users.map((user) => (
              <div className='content' key={user.id}>
                <img src={user.avatar} alt={user.first_name} />
                <h2>Name: {user.first_name} {user.last_name}</h2>
                <p>Email: {user.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
           
        </>
    )
}

export default Content
