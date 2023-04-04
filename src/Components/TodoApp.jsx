import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Login from '../routes/Login';
import Profile from '../routes/Profile';
import About from '../routes/About';
import NoMatches from '../routes/NoMatches';
import Layouts from './Layouts';
import SinglePage from '../routes/SinglePage';

const TodoApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path=":slug" element={<SinglePage />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NoMatches />} />
        </Route>
      </Routes>
    </>
  );
};

export default TodoApp;
