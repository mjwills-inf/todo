// Todo factory function

const TodoItem = (title, description, dueDate, priority, notes, flagged, completed) => {
  return {
    title, 
    description,
    dueDate,
    priority,
    notes,
    flagged,
    completed
  }
};

export default TodoItem