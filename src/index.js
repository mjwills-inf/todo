import { Todo, Project, ProjectContainer } from './modules/todoObjects';
import DomController from './modules/DOMcontroller';
import Render from './modules/render';


// Creation of some default data for DOM start
// To be encapsulated somewhere in another function?
// addToProjectContainer method similarly should be there for todo/projects

let projectContainer = ProjectContainer();
let defaultProject = Project('Default', 'This is your default project', '#013220');
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
