import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layouts;
