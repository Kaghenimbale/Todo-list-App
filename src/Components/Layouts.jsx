import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layouts = () => (
  <div className="wrapper">
    <Navbar />
    <Outlet />
  </div>
);

export default Layouts;
