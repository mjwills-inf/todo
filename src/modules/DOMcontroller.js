import { Todo, Project, ProjectContainer } from './todoObjects';
import Render from './render';
import { projectContainer } from '../index'

const DomController = () => {
  
  const render = Render();
  let currentProject = projectContainer.projects[0]; //imprt frm index & set as [0] (default)
  
  const projectTitleInput = document.querySelector('#project-title');
  const projectDescriptionInput = document.querySelector('#project-description');
  const projectColorInput = document.querySelector('#color');
  const todoTitleInput = document.querySelector('#title');
  const todoDescription = document.querySelector('#description');
  const todoDueDateInput = document.querySelector('#duedate');
  const todoPriorityInput = document.querySelector('#priority');
  const todoNoteInput = document.querySelector('#notes');  

  const addListeners = () => {
    const buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', buttonSwitch)
    };
  };

  const buttonSwitch = (event) => {
    switch (event.target.id) {
      case 'settings':
        alert("Settings modal [Would be here]")
        break;
      case 'add-project-modal':
        toggleModalProject();
        break;
      case 'add-todo-modal':
        toggleModalTodo();
        break;
      case 'project-submit':
        createProject()
        render.renderProjects(projectContainer.projects);       
        toggleModalProject();
        clearModalProject(); 
        break;
      case 'todo-submit':
        createTodo();
        render.renderTodos(currentProject.todos);
        toggleModalTodo();
        clearModalTodo();
        break;
      case 'project-cancel':
        toggleModalProject();
        clearModalProject();
        break;
      case 'todo-cancel':
        toggleModalTodo();
        clearModalTodo();
        break;
    };
  };

  const toggleModalProject = () => {
    const modalProject = document.querySelector('#modal-project');
    if (modalProject.style.display == 'none' || modalProject.style.display == '') {
      modalProject.style.display = 'block';
    } else {
      modalProject.style.display = 'none';
    };
  };
  const toggleModalTodo = () => {
    const modalTodo = document.querySelector('#modal-todo');
    if (modalTodo.style.display == 'none' || modalTodo.style.display == '') {
      modalTodo.style.display = 'block';
    } else {
      modalTodo.style.display = 'none';
    };
  };
  const clearModalProject = () => {
    projectTitleInput.value = '';
    projectDescriptionInput.value = '';
    projectColorInput.value = '#b2b2b2'; 
  };
  const clearModalTodo = () => {
    todoTitleInput.value = '';
    todoDescription.value = '';
    todoDueDateInput.value = '';
    todoNoteInput.value = '';
    todoPriorityInput.value = 'high';    
  };
  const createProject = () => {
    const newProject = Project(projectTitleInput.value, projectDescriptionInput.value,
        projectColorInput.value);
    projectContainer.addToProjectContainer(newProject);    
  }
  const createTodo = () => {
    const newTodo = Todo(todoTitleInput.value, todoDescription.value, todoDueDateInput.value, 
        todoPriorityInput.value, todoNoteInput.value, false, false);
    currentProject.todos.push(newTodo);
   
  }

  // started with attempt to add listeners in render (while creating nodes)
  // stack maxed with domcontroller calling render calling domcontroller etc etc
  // read article advising whole document listener and adding event.target specific

  const documentListener = () => { 
    document.addEventListener('click', function (event) {    
      
      if (event.target.matches('.project-div')) {        
        let containerIndex = event.target.getAttribute('container-array-ref');
        currentProject = projectContainer.projects[containerIndex];
        render.renderTodos(currentProject.todos);
        render.currentProjectDisplay(currentProject);
      }
      if (event.target.matches('.todo-div')) {        
        appendTodo(event);
        
      }
      if (event.target.matches('.project-edit')) {
        console.log(event.target);
        // make edit modal appear
      }
      if (event.target.matches('.project-delete')) {
        console.log(event.target);
      }
      if (event.target.matches('.todo-edit')) {
        console.log(event.target);
      }
      if (event.target.matches('.todo-delete')) {
        console.log(event.target);
      }
      if (event.target.matches('.flagged-div')) {
        console.log(event.target);
      }
      if (event.target.matches('.complete-div')) {
        console.log(event.target);
      }
    })
  }

  const appendTodo = (event) => {
    let arrayRef = event.target.getAttribute('project-array-ref')
    console.log(arrayRef)
    
    let newDivDesc = document.createElement('div')
    newDivDesc.className = 'description-div'
    let newDivNotes = document.createElement('div')
    newDivNotes.className = 'notes-div'
    console.log(currentProject.todos[arrayRef].description)
       
    event.target.querySelector('.notes-container').appendChild(newDivDesc)
    event.target.querySelector('.notes-container').appendChild(newDivNotes)
    
  }
  

  return { 
    addListeners,
    documentListener
   
  };
};

export default DomController;