import React from 'react';
import styles from './styles.module.scss';

const TodoItem = ({ todo, onRemove }) => {
  const handleRemoveButtonClick = () => {
    onRemove(todo.id);
  };

  return (
    <div className={styles['todo-item']}>
      <h5>{todo.text}</h5>
      <button
        className={styles['remove-button']}
        onClick={handleRemoveButtonClick}
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
