// import { Todo, Project, ProjectContainer } from './modules/todoObjects';
import DomController from './modules/DOMcontroller';
import Render from './modules/render';
import DefaultData from './modules/defaultData';

let defaultData = DefaultData();
defaultData.storageCheck(); // its run here (otherwise index fine)
let projectContainer = defaultData.projectContainer;
let defaultProject = defaultData.defaultProject;

let domControl = DomController();
domControl.addListeners();
domControl.documentListener();
//domcontol.query local storage?

let render = Render();
render.renderProjects(projectContainer.projects);
render.renderTodos(defaultProject.todos);
render.currentProjectDisplay(defaultProject);


