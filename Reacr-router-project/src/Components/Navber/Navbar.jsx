import React from 'react';
import { Link } from 'react-router';
const Navbar = () => {
  return (
     <nav className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">ShO👑HaN</h1>
        <ul className="flex space-x-10">
          
          <li>
            <Link to="/login" className="relative text-white px-2 py-1 transition-all duration-200 hover:text-blue-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-300 before:transition-all before:duration-300 hover:before:w-full text-2xl font-bold">Login</Link>
          </li>
          <li>
            <Link to="/about" className="relative text-white px-2 py-1 transition-all duration-200 hover:text-blue-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-300 before:transition-all before:duration-300 hover:before:w-full text-2xl font-bold">About</Link>
          </li>
          <li>
            <Link to="/contact" className="relative text-white px-2 py-1 transition-all duration-200 hover:text-blue-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-300 before:transition-all before:duration-300 hover:before:w-full text-2xl font-bold">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;