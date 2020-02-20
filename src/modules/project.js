// Project factory function

const Project = (title, description) => {
  let todos = []
  return {
    todos,
    title, 
    description
  }
};

export default Project