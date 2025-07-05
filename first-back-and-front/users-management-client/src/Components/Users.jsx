import React from 'react';
import { use } from 'react';
const Users = ({ userspromise }) => {

  const users = use(userspromise);
  console.log(users);


  return (
    <div>
      {
        users.map(user => 
          <>
          <div 
            style={{
      border: '1px solid #ccc',
      padding: '16px',
      borderRadius: '12px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
      marginBottom: '16px',
      maxWidth: '400px',
    }}
          >
        <p key={user.id}>Name:{user.name}</p>
        <p>Email: {user.email}</p>
        </div>
        </>
      )
      }
    </div>
  );
};

export default Users;