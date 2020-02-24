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

export default Project