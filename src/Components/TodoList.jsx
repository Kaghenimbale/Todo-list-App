import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = (
  {
    todosProps, setTodos, delTodo, setUpdate,
  },
) => (
  <ul>
    {todosProps?.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        setTodos={setTodos}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);
export default TodoList;

TodoList.propTypes = {
  setTodos: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

TodoList.propTypes = {
  todosProps: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

TodoList.propTypes = {
  delTodo: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

TodoList.propTypes = {
  setUpdate: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};
