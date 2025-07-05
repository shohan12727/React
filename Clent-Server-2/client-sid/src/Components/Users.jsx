import React, { useEffect, useState } from 'react';

const Users = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users').then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }
    , []);

  return (
    <div>
           <h2>All Users</h2>
           {
            users.length === 0 ? (
              <p>Loading user.............</p>
            ) : (
              users.map( user => (
                <div key={user.id} 
                style={{
                          border: '2px solid tomato',
                          margin: '10px',
                          padding: '10px',
                          background: '#E56717',
                          borderRadius: '10px'
                }}>
        <p><strong>Name: {user.name}</strong></p>
        <p><strong>Email: {user.email}</strong></p>
                </div>
              ))
            )
           }
    </div>
  );
};

export default Users;