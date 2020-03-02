import { Todo, Project, ProjectContainer } from './modules/todoObjects';
import DomController from './modules/DOMcontroller';
import Render from './modules/render';


// Creation of some default data for DOM start
// To be encapsulated somewhere in another function?
// addToProjectContainer method similarly should be there for todo/projects

let projectContainer = ProjectContainer();
let defaultProject = Project('Default', 'This is your default project', '#013220');
let dummyProject = Project('Dummy', 'for demo', '#02075D');
let demoTodo1 = Todo('Your Todos are displayed here', '', '02/02/2022', 3, '', false, true);
let demoTodo2 = Todo('Click to expand', "Here's more infrmation in a description", 
    '', 3, "And here's even more for any notes you may want to make", false, false);
let demoTodo3 = Todo('Edit, delete, complete', '', '', false, false);
defaultProject.todos.push(demoTodo1, demoTodo2, demoTodo3);
projectContainer.addToProjectContainer(defaultProject);
projectContainer.addToProjectContainer(dummyProject);

// Intialise some stuff
// "factory functions - to use a function we need to assign to a variable"
// To be encapsulated somewhere in another function?

let domControl = DomController();
domControl.addListeners();
domControl.documentListener();
let render = Render();
render.renderProjects(projectContainer.projects);
render.renderTodos(defaultProject.todos);
render.currentProjectDisplay(defaultProject);

export { projectContainer }
