// Todo factory function

const Todo = (title, description, dueDate, priority, notes, flagged, completed) => {
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

export default Todo