import React from 'react';
import Cousin from './Cousin';
const Uncle = () => {
  return (
    <div>
      <h2>Uncle</h2>
      <section className='flex'>
        <Cousin name='Ratul'></Cousin>
        <Cousin name='Ritu'></Cousin>
      </section>
    </div>
  );
};

export default Uncle;