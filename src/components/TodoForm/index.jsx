import React, { useState } from 'react';

const TodoForm = ({ onSave }) => {
  const [text, setText] = useState('');

  const mySubmitHandler = (event) => {
    event.preventDefault();
    onSave(text);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={mySubmitHandler}>
      <label>
        Todo:
        <input value={text} type="text" name="todo" onChange={handleOnChange} />
      </label>
      <input type="submit" value="Add" />
    </form>
  );
};

export default TodoForm;
