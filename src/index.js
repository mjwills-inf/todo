// import { Todo, Project, ProjectContainer } from './modules/todoObjects';
import DomController from './modules/DOMcontroller';
import Render from './modules/render';
import DefaultData from './modules/defaultData';

(function() {

console.log("DEFAULT DATA INIT")
let defaultData = DefaultData();
let projectContainer = defaultData.projectContainer;
let defaultProject = defaultData.defaultProject;

console.log("DOM CONTROL INIT")
let domControl = DomController();
domControl.addListeners();
domControl.documentListener();

let render = Render();
render.renderProjects(projectContainer.projects);
render.renderTodos(defaultProject.todos);
render.currentProjectDisplay(defaultProject);

})();
