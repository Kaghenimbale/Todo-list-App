import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/TodoItem.module.css';

const TodoItem = ({ itemProp, setTodos, delTodo, setUpdate }) => {
  const [editing, setEditing] = useState(false);
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    );
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button type="button" onClick={handleEditing}>
          Edit
        </button>
        <button type="button" onClick={() => delTodo(itemProp.id)}>
          Delete
        </button>
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input
        type="text"
        value={itemProp.title}
        style={editMode}
        className="textInput"
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

TodoItem.propTypes = {
  setTodos: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

TodoItem.propTypes = {
  delTodo: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

TodoItem.propTypes = {
  setUpdate: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};
