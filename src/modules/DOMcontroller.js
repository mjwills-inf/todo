import { Todo, Project, ProjectContainer } from './todoObjects';
import Render from './render';

const DomController = () => {

  // let runRender = Render;
  // runRender.renderTodos();

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
        alert("Settings modal for dark mode?")
        break;
      case 'add-project-modal':
        toggleModalProject();
        break;
      case 'add-todo-modal':
        toggleModalTodo();
        break;
      case 'project-submit':
        console.log('project-submit')
        break;
      case 'todo-submit':
        console.log('todo-submit')
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

  return { addListeners };

};



export default DomController;