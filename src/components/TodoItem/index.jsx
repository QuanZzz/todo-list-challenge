import React from 'react';

const TodoItem = ({ todo, onRemove }) => {
  const handleRemoveButtonClick = () => {
    onRemove(todo.id);
  };

  return (
    <div>
      <h3>{todo.text}</h3>
      <button onClick={handleRemoveButtonClick}>Remove</button>
    </div>
  );
};

export default TodoItem;
