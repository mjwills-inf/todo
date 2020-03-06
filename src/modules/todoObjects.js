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

const Project = (title, description, color) => {
  let todos = []
  return {
    todos,
    title,
    description,
    color
  }
};

const ProjectContainer = () => {
  const projects = [];
  const addToProjectContainer = (projectObject) => {
    projects.push(projectObject)
  }
  return {
    projects,
    addToProjectContainer,
  }
};

export { Project, Todo, ProjectContainer }