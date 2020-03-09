import { Todo, Project, ProjectContainer } from './todoObjects';

const DefaultData = () => {

  const saveToLocal = (projectContainerArg) => {
    let data = JSON.stringify(projectContainerArg);
    localStorage.setItem('dataTodo', data)
  }

  let projectContainer = ProjectContainer();
  let defaultProject; 

  if (localStorage.dataTodo) {
    
    console.log("running pullfromlocal");
    let dataCopy = JSON.parse(localStorage.getItem('dataTodo'));
    for (let i = 0; i < dataCopy.projects.length; i++) {
      let transfer = dataCopy.projects[i];
      projectContainer.projects.push(transfer)        
    }
    defaultProject = projectContainer.projects[0]  
  } else {
    console.log("running populateLocal")
    defaultProject = Project('Default', 'This is your default project', '#013220');
    let dummyProject = Project('Dummy', 'for demo', '#02075D');
    let demoTodo1 = Todo('Your Todos are displayed here', 'Description Description Description',
      '2022-12-02', 2, 'Notes Notes Notes Notes Notes Notes Notes Notes', false, false);
    let demoTodo2 = Todo('Click to expand', "Here's more infrmation in a description",
      '', 3, "And here's even more for any notes you may want to make", false, false);
    let demoTodo3 = Todo('Edit, delete, complete', '', '', '', '', false, false);
    let dummyTodo = Todo('Dummy', 'fo demo', '2020-02-02', 2, 'dummy notes', true, false);
    let dummyTodo2 = Todo('Dummy2', 'fo2 demo', '1999-09-19', 0, 'dummy notes', false, true);
    defaultProject.todos.push(demoTodo1, demoTodo2, demoTodo3);
    dummyProject.todos.push(dummyTodo, dummyTodo2);
    projectContainer.addToProjectContainer(defaultProject);
    projectContainer.addToProjectContainer(dummyProject);
  }

  return {
    projectContainer,
    defaultProject,
    saveToLocal
  }

}

export default DefaultData;

//imported into index for page start
//imported into DOMController for page interaction
//(so evaluated twice) 