import React from 'react';
import CarList from './CarList';
const Car = () => {
  return (
    <div 
    className='flex flex-col justify-center items-center m-20'
    >
      <h1 className='text-2xl text-black-600 font-extrabold'>List of car</h1>
      <CarList></CarList>
    </div>
  );
};

export default Car;