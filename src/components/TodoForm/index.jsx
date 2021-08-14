import React, { useState } from 'react';
import styles from './styles.module.scss';

const TodoForm = ({ onSave }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(text);
    setText('');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          className={styles['todo-input']}
          value={text}
          type="text"
          name="todo"
          onChange={handleOnChange}
          placeholder="Add new todo"
        />
      </label>
      <input className={styles['add-button']} type="submit" value="Add" />
    </form>
  );
};

export default TodoForm;
