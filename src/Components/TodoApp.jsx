import React from 'react';
import Header from './Header';
import TodosLogic from './TodosLogic';
import Navbar from './Navbar';
import Modal from './Modal';
import Form from './Form';

const TodoApp = () => {
  return (
    <div className="wrapper">
      <div className="todos">
        <Navbar />
        <Header />
        <TodosLogic />
        <Modal />
        {/* <Form /> */}
      </div>
    </div>
  );
};

export default TodoApp;
