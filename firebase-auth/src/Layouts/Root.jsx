import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
const Root = () => {
  return (
    <div
      className='min-h-screen mx-auto p-4 bg-red-200'
    >
      <h1
        className='text-center text-5xl '
      >Fire🔥base Auth</h1>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;