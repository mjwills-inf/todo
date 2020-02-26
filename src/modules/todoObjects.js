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

// Project Container module iife

// const projectContainer = (function() {
//   const projects = [];
//   console.log(projects);
// })();

export { Project, Todo, }