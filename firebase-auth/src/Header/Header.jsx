import React from 'react';
import { NavLink } from 'react-router';
const Header = () => {
  return (
    <nav>
      <ul>
        <NavLink className="text-2xl m-5" to="/">Home</NavLink>
        <NavLink className="text-2xl m-5" to="/login">Login</NavLink>
      </ul>
    </nav>
  );
};

export default Header;