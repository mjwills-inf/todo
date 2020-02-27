

const Render = () => {

  const renderProjects = (projectContainerArg) => {
    const projectDiv = document.querySelector('#dom-project');
    projectDiv.innerHTML = '';    // would refactor from innerHTML
    
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
      editButton.className = 'edit-button';
      editButton.innerText = 'edit';

      let deleteButton = document.createElement('button');
      deleteButton.className = 'delete-button';
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
    todoDiv.innerHTML = '';    // would refactor from innerHTML

    for (let i=0; i<projectArg.length; i++) {

      let newDiv = document.createElement('div');
      newDiv.className = 'todo-div'

      let title = document.createElement('h5');
      title.innerText = projectArg[i].title;
      
      let dateDiv = document.createElement('div');
      dateDiv.className = 'date-div';
      dateDiv.innerText = projectArg[i].dueDate;

      let editButton = document.createElement('button');
      editButton.className = 'edit-button';
      editButton.innerText = 'edit';

      let deleteButton = document.createElement('button');
      deleteButton.className = 'delete-button';
      deleteButton.innerText = 'delete';

      let flaggedDiv = document.createElement('div');
      flaggedDiv.className = 'flagged-div';
      flaggedDiv.innerText = 'flagged-div';

      let completeDiv = document.createElement('div');
      completeDiv.className = 'complete-div';
      completeDiv.innerText = 'complete-div';   

      newDiv.appendChild(title);
      newDiv.appendChild(dateDiv);
      newDiv.appendChild(editButton);
      newDiv.appendChild(deleteButton);
      newDiv.appendChild(flaggedDiv);
      newDiv.appendChild(completeDiv);
      

      todoDiv.appendChild(newDiv)
    }

  }


  return {
    renderTodos,
    renderProjects
  }

}

export default Render