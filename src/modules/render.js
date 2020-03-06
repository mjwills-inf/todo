const Render = () => {

  const renderProjects = (projectContainerArg) => {
    const projectDiv = document.querySelector('#dom-project');
    projectDiv.innerHTML = '';    
    for (let i=0; i<projectContainerArg.length; i++) {
      
      let newDiv = document.createElement('div');
      newDiv.className = 'project-div';
      newDiv.setAttribute('container-array-ref', i);
      

      let colorDiv = document.createElement('div');
      colorDiv.style.backgroundColor = projectContainerArg[i].color;
      colorDiv.textContent = "Color"

      let title = document.createElement('h5');
      title.className = 'project-title';
      title.textContent = projectContainerArg[i].title;

      let editButton = document.createElement('button');
      editButton.classList = 'edit-button project-edit';
      editButton.innerText = 'edit';

      let deleteButton = document.createElement('button');
      deleteButton.classList = 'delete-button project-delete';
      deleteButton.innerText = 'delete';

      newDiv.appendChild(colorDiv);
      newDiv.appendChild(title);
      newDiv.appendChild(editButton);
      newDiv.appendChild(deleteButton);
      projectDiv.appendChild(newDiv);
    }    
  }

  const renderTodos = (projectArg) => {
    const todoDiv = document.querySelector('#dom-todo');
    todoDiv.innerHTML = '';
    for (let i=0; i<projectArg.length; i++) {

      let newDiv = document.createElement('div');
      newDiv.className = 'todo-div'
      newDiv.setAttribute('project-array-ref', i)

      let title = document.createElement('h5');
      title.className = 'todo-title'
      title.innerText = projectArg[i].title;
      
      let dateDiv = document.createElement('div');
      dateDiv.className = 'date-div';
      dateDiv.innerText = projectArg[i].dueDate;
      
      let noteDescrDiv = document.createElement('div')
      noteDescrDiv.className = 'notes-container'

      let editButton = document.createElement('button');
      editButton.classList = 'edit-button todo-edit';
      editButton.innerText = 'edit';

      let deleteButton = document.createElement('button');
      deleteButton.classList = 'delete-button todo-delete';
      deleteButton.innerText = 'delete';

      let flaggedDiv = document.createElement('div');
      flaggedDiv.className = 'flagged-div';
      flaggedDiv.innerText = '[flagged-div]';
      if (projectArg[i].flagged == true) {
        flaggedDiv.classList.add('isFlagged')
      }

      let completeDiv = document.createElement('div');
      completeDiv.className = 'complete-div';
      completeDiv.innerText = '[complete-div]';
      if (projectArg[i].completed == true) {
        completeDiv.classList.add('isComplete')
      }   

      newDiv.appendChild(title);
      newDiv.appendChild(dateDiv);
      newDiv.appendChild(noteDescrDiv)
      newDiv.appendChild(editButton);
      newDiv.appendChild(deleteButton);
      newDiv.appendChild(flaggedDiv);
      newDiv.appendChild(completeDiv);
      todoDiv.appendChild(newDiv)
    }
  }

  const currentProjectDisplay = (currentProject) => {
    const currentProjectName = document.querySelector('#project-name-display');
    const currentProjectDesc = document.querySelector('#project-description-display');
    currentProjectName.innerText = currentProject.title;
    currentProjectDesc.innerText = currentProject.description;
  }

  return {
    renderTodos,
    renderProjects,
    currentProjectDisplay
  }

}

export default Render