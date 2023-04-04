import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todosProps, setTodos, delTodo, setUpdate }) => {
  //   const { todosProps } = props;
  //   console.log(todosProps);
  return (
    <ul>
      {todosProps?.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            itemProp={todo}
            setTodos={setTodos}
            delTodo={delTodo}
            setUpdate={setUpdate}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
