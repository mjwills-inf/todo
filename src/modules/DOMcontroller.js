import { Todo, Project } from './todoObjects';
import Render from './render';
import DefaultData from './defaultData'


const DomController = () => {  
  
  /////// Imported and whole function scoped variables for input nodes
  const defaultData = DefaultData()
  let projectContainer = defaultData.projectContainer;   
  const render = Render();  
  let currentProjectRef = 0;
  
  const projectTitleInput = document.querySelector('#project-title');
  const projectDescriptionInput = document.querySelector('#project-description');
  const projectColorInput = document.querySelector('#color');
  const todoTitleInput = document.querySelector('#title');
  const todoDescription = document.querySelector('#description');
  const todoDueDateInput = document.querySelector('#duedate');
  const todoPriorityInput = document.querySelector('#priority');
  const todoNoteInput = document.querySelector('#notes');
  
  const projectTitleEdit = document.querySelector('#project-title-edit');
  const projectDescriptionEdit = document.querySelector('#project-description-edit');
  const projectColorEdit = document.querySelector('#color-edit');
  const todoTitleEdit = document.querySelector('#title-edit');
  const todoDescriptionEdit = document.querySelector('#description-edit');
  const todoDueDateEdit = document.querySelector('#duedate-edit');
  const todoPriorityEdit = document.querySelector('#priority-edit');
  const todoNoteEdit = document.querySelector('#notes-edit');


  /////// Add listeners across all markup and modal buttons with switch statement 
  /////// pointing to appropriate helper and imported functions  
  const addListeners = () => {
    const buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', buttonSwitch)
    }
  }

  const buttonSwitch = (event) => {
    switch (event.target.id) {
      case 'settings':
        alert("Settings modal [Would be here]")
        break;
      case 'save':
        alert("save to localStorage would be set up as an option and then run on obj edit functions")
        defaultData.saveToLocal(projectContainer)
        break;
      case 'clear':
        localStorage.clear()
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
        render.renderTodos(projectContainer.projects[currentProjectRef].todos);
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
      case 'project-submit-edit':
        confirmProjectEdit(event);
        render.currentProjectDisplay(projectContainer.projects[currentProjectRef]);
        render.renderProjects(projectContainer.projects);
        toggleModalProjectEdit();
        break;
      case 'project-cancel-edit':
        toggleModalProjectEdit();
        break;
      case 'todo-submit-edit':
        confirmTodoEdit(event);
        render.renderTodos(projectContainer.projects[currentProjectRef].todos)
        toggleModalTodoEdit();
        break;
      case 'todo-cancel-edit':
        toggleModalTodoEdit();
        break;
    }
  }


  /////// Helper / directed functions for switch statement listeners
  const toggleModalProject = () => {
    const modalProject = document.querySelector('#modal-project');
    if (modalProject.style.display == 'none' || modalProject.style.display == '') {
      modalProject.style.display = 'block';
    } else {
      modalProject.style.display = 'none';
    }
  }
  const toggleModalTodo = () => {
    const modalTodo = document.querySelector('#modal-todo');
    if (modalTodo.style.display == 'none' || modalTodo.style.display == '') {
      modalTodo.style.display = 'block';
    } else {
      modalTodo.style.display = 'none';
    }
  }
  const clearModalProject = () => {
    projectTitleInput.value = '';
    projectDescriptionInput.value = '';
    projectColorInput.value = '#b2b2b2'; 
  }
  const clearModalTodo = () => {
    todoTitleInput.value = '';
    todoDescription.value = '';
    todoDueDateInput.value = '';
    todoNoteInput.value = '';
    todoPriorityInput.value = '3';    
  }
  const createProject = () => {
    const newProject = Project(projectTitleInput.value, projectDescriptionInput.value,
        projectColorInput.value);
    projectContainer.addToProjectContainer(newProject);    
  }
  const createTodo = () => {
    const newTodo = Todo(todoTitleInput.value, todoDescription.value, todoDueDateInput.value, 
        todoPriorityInput.value, todoNoteInput.value, false, false);
        projectContainer.projects[currentProjectRef].todos.push(newTodo);
  }


  /////// Event listeners for all of the rendered content (todos and projects)
  // Started with attempt to add listeners in render (while creating nodes)
  // stack maxed with domcontroller calling render calling domcontroller etc etc
  // read article advising whole document listener and adding event.target specific
  // cant use a switch statement with classList methods  
  const documentListener = () => { 
    document.addEventListener('click', function (event) {    
      
      if (event.target.matches('.project-div')) {        
        let containerIndex = event.target.getAttribute('container-array-ref');        
        currentProjectRef = containerIndex;
        render.renderTodos(projectContainer.projects[currentProjectRef].todos);
        render.currentProjectDisplay(projectContainer.projects[currentProjectRef]);
      }
      if (event.target.matches('.todo-div')) {        
        clearAppendTodo();
        appendTodo(event);        
      }
      if (event.target.matches('.project-edit')) {        
        let containerIndex = event.target.parentNode.getAttribute('container-array-ref');        
        toggleModalProjectEdit(containerIndex);
        popoulateProjectEdit(event);        
      }
      if (event.target.matches('.project-delete')) {               
        deleteProject();
        render.renderProjects(projectContainer.projects);
        (currentProjectRef > 0) ? currentProjectRef-- : currentProjectRef=currentProjectRef;        
        render.renderProjects(projectContainer.projects)
        render.renderTodos(projectContainer.projects[currentProjectRef].todos);
        render.currentProjectDisplay(projectContainer.projects[currentProjectRef])
      }
      if (event.target.matches('.todo-edit')) {        
        let projectIndex = event.target.parentNode.getAttribute('project-array-ref');
        toggleModalTodoEdit(projectIndex);
        popoulateTodoEdit();        
      }
      if (event.target.matches('.todo-delete')) {
        deleteTodo();
        render.renderTodos(projectContainer.projects[currentProjectRef].todos)
      }
      if (event.target.matches('.flagged-div')) {
        toggleFlagged();
        render.renderTodos(projectContainer.projects[currentProjectRef].todos);
      }
      if (event.target.matches('.complete-div')) {
        toggleComplete();
        render.renderTodos(projectContainer.projects[currentProjectRef].todos);
      }      
    });
  } 

  /////// functions for all listeners that exist on rendered project / todo areas
  const clearAppendTodo = () => {
    let parentNodes = document.querySelectorAll('.notes-container');    
    parentNodes.forEach(
      function (currentValue) {      
        currentValue.innerHTML = '';
      }
    );
  }  
  const appendTodo = () => {//
    let noteConDiv = event.target.querySelector('.notes-container');
    if (noteConDiv.classList.contains('notes-container-rendered')) {
      noteConDiv.classList.remove('notes-container-rendered')
    } else {
      let arrayRef = event.target.getAttribute('project-array-ref');    
      let newDivDesc = document.createElement('div');
      newDivDesc.className = 'description-div';
      newDivDesc.textContent = projectContainer.projects[currentProjectRef].
          todos[arrayRef].description;      
      let newDivNotes = document.createElement('div');
      newDivNotes.className = 'notes-div';    
      newDivNotes.textContent = projectContainer.projects[currentProjectRef].
          todos[arrayRef].notes;       
      noteConDiv.appendChild(newDivDesc);
      noteConDiv.appendChild(newDivNotes);
      noteConDiv.classList.add('notes-container-rendered') 
    }  
  }
  
  const toggleModalProjectEdit = (containerIndex) => {
    const modalProject = document.querySelector('#modal-project-edit');
    modalProject.setAttribute('container-index', containerIndex)
    if (modalProject.style.display == 'none' || modalProject.style.display == '') {
      modalProject.style.display = 'block';
    } else {
      modalProject.style.display = 'none';
    }
  }
  const toggleModalTodoEdit = (projectIndex) => {
    const modalTodo = document.querySelector('#modal-todo-edit');
    modalTodo.setAttribute('project-index', projectIndex)
    if (modalTodo.style.display == 'none' || modalTodo.style.display == '') {
      modalTodo.style.display = 'block';
    } else {
      modalTodo.style.display = 'none';
    }
  }

  const popoulateProjectEdit = () => {//
    let arrayRef = event.target.parentNode.getAttribute('container-array-ref');    
    let projectItem = projectContainer.projects[arrayRef];    
    projectTitleEdit.value = projectItem.title; 
    projectDescriptionEdit.value = projectItem.description;  
    projectColorEdit.value = projectItem.color;
  }
  const popoulateTodoEdit = () => {
    let arrayRef = event.target.parentNode.getAttribute('project-array-ref');
    let todoItem = projectContainer.projects[currentProjectRef].todos[arrayRef];
    todoTitleEdit.value = todoItem.title;
    todoDescriptionEdit.value = todoItem.description;
    todoDueDateEdit.value = todoItem.dueDate;
    todoPriorityEdit.value = todoItem.priority;
    todoNoteEdit.value = todoItem.notes; 
  }

  const confirmProjectEdit = () => {//
    let arrayRef = event.target.parentNode.parentNode.getAttribute('container-index');
    let targetProject = projectContainer.projects[arrayRef];    
    targetProject.title = projectTitleEdit.value;
    targetProject.description = projectDescriptionEdit.value;
    targetProject.color = projectColorEdit.value;    
  }
  const confirmTodoEdit = () => {    
    let arrayRef = event.target.parentNode.parentNode.getAttribute('project-index');
    let targetTodo = projectContainer.projects[currentProjectRef].todos[arrayRef];
    targetTodo.title = todoTitleEdit.value;
    targetTodo.description = todoDescriptionEdit.value;
    targetTodo.dueDate = todoDueDateEdit.value;
    targetTodo.priority = todoPriorityEdit.value;
    targetTodo.notes = todoNoteEdit.value;
  }

  const deleteProject = () => {
    let arrayRef = event.target.parentNode.getAttribute('container-array-ref')
    if (confirm("This will delete your Project and all it's Todos")) {
      projectContainer.projects.splice(arrayRef, 1)
    }    
  }
  const deleteTodo = () => {
    let arrayRef = event.target.parentNode.getAttribute('project-array-ref');    
    projectContainer.projects[currentProjectRef].todos.splice(arrayRef, 1);
    console.log(projectContainer.projects[currentProjectRef]);    
  }

  const toggleFlagged = () => {
    let arrayRef = event.target.parentNode.getAttribute('project-array-ref');
    if (projectContainer.projects[currentProjectRef].todos[arrayRef].flagged == true) {
      projectContainer.projects[currentProjectRef].todos[arrayRef].flagged = false
    } else {
      projectContainer.projects[currentProjectRef].todos[arrayRef].flagged = true 
    }
  }

  const toggleComplete = () => {
    let arrayRef = event.target.parentNode.getAttribute('project-array-ref');
    if (projectContainer.projects[currentProjectRef].todos[arrayRef].completed == true) {
      projectContainer.projects[currentProjectRef].todos[arrayRef].completed = false
    } else {
      projectContainer.projects[currentProjectRef].todos[arrayRef].completed = true 
    }
  }
  
  ////// Listeners returned for export for page init in index
  return { 
    addListeners,
    documentListener
   
  }
}

export default DomController;