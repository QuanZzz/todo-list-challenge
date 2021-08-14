import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';
import { createTodoObject } from '../utils/todo';

const Todo = () => {
  const [todos, setTodo] = useState([]);

  const handleSaveTodo = (todoText) => {
    const newTodo = createTodoObject(todoText);
    setTodo([newTodo, ...todos]);
  };

  const handleRemoveTodo = (todoId) => {
    const restTodos = todos.filter((todo) => todo.id !== todoId);
    setTodo(restTodos);
  };

  return (
    <div>
      <h1>TODO List</h1>
      <TodoForm onSave={handleSaveTodo} />
      {todos.map((todo) => {
        return (
          <TodoItem key={todo.id} todo={todo} onRemove={handleRemoveTodo} />
        );
      })}
    </div>
  );
};

export default Todo;
