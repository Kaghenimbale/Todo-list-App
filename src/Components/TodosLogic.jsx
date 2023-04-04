import React, { useState } from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4,
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    // update state
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    );
  };

  const delTodo = (id) => {
    const newTodos = [...todos].filter((item) => item.id !== id);
    setTodos([...newTodos]);
  };

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodoList
        setUpdate={setUpdate}
        todosProps={todos}
        setTodos={setTodos}
        delTodo={delTodo}
      />
    </div>
  );
};

export default TodosLogic;
