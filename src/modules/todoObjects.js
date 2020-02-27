// Todo factory
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

// Project factory
const Project = (title, description, color) => {
  let todos = []
  return {
    todos,
    title, 
    description,
    color
  }
};

// Project Container factory
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