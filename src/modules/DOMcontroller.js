import { Todo, Project } from './todoObjects';

const DomController = () => {

  const projectTitleInput = document.querySelector('#project-title');
  const projectDescriptionInput = document.querySelector('#project-description');
  const projectColorInput = document.querySelector('#color');
  const todoTitleInput = document.querySelector('#title');
  const todoDescription = document.querySelector('#description');
  const todoDueDateInput = document.querySelector('#duedate');
  const todoPriorityInput = document.querySelector('#priority');
  const todoNoteInput = document.querySelector('#notes');  

  const addListeners = () => {
    const buttons = document.querySelectorAll('button')
    console.log(buttons)
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', buttonSwitch)
    }
    console.log(projectColorInput)
    console.log(projectDescriptionInput)
    console.log(projectTitleInput)
    console.log(todoDescription)
    console.log(todoDueDateInput)
    console.log(todoNoteInput)
    console.log(todoPriorityInput)
    console.log(todoTitleInput)
  }

  const buttonSwitch = (event) => {
    switch (event.target.id) {
      case 'settings':
        console.log('settings test')
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
        toggleModalProject()
        break;
      case 'todo-cancel':
        toggleModalTodo();
        break;
    }
  }

  const toggleModalProject = () => {
    const modalProject = document.querySelector('#modal-project');
    if (modalProject.style.display == 'none' || modalProject.style.display == '') {
      modalProject.style.display = 'block'
    } else {
      modalProject.style.display = 'none'
    }
  };

  const toggleModalTodo = () => {
    const modalTodo = document.querySelector('#modal-todo');
    if (modalTodo.style.display == 'none' || modalTodo.style.display == '') {
      modalTodo.style.display = 'block'
    } else {
      modalTodo.style.display = 'none'
    }
  };

  const clearModalProject = () => {

  }

  const clearModalTodo = () => {
    
  }

  return { addListeners };

}



export default DomController;