export const createTodoObject = (todoText) => {
  return { id: new Date().getTime(), text: todoText };
};
