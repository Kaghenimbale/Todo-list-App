import React from 'react';
import Header from '../Components/Header';
import TodosLogic from '../Components/TodosLogic';

const Home = () => {
  return (
    <div className="todos">
      <Header />
      <TodosLogic />
    </div>
  );
};

export default Home;
