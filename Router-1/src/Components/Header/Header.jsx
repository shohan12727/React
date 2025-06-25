import React from 'react';
import './Header.css'
import { NavLink } from 'react-router';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Header = () => {
  return (
    <div>
      <header className="main-header">
      <div className="logo">Shohan👑</div>
      <nav className="navbar">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/projects" className="nav-link">Projects</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </nav>
    </header>
    </div>
  );
};

export default Header;