import React, { useState } from 'react';

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
        Todo:
        <input value={text} type="text" name="todo" onChange={handleOnChange} />
      </label>
      <input type="submit" value="Add" />
    </form>
  );
};

export default TodoForm;
