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

// Project factory function

const Project = (title, description, color) => {
  let todos = []
  return {
    todos,
    title, 
    description,
    color
  }
};

export { Project, Todo }