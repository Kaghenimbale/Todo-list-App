import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';

const Navbar = () => {
  const links = [
    { path: '/', text: 'Home' },
    { path: 'about', text: 'About' },
    { path: 'profile', text: 'Profile' },
    { path: 'login', text: 'Login' },
  ];
  return (
    <nav className="navbar">
      <ul className="navlink">
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
