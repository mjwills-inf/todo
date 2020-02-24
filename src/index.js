import Todo from "./modules/todo";
import Project from "./modules/project";

let defaultProject = Project("Default", "This is your default project", "#b2b2b2");
let demoTodo1 = Todo("Your Todos are displayed here", "", "", 3, "", false, true)
let demoTodo2 = Todo("Click to expand", "Here's more infrmation in a description", 
    "", 3, "And here's even more for any notes you may want to make", false, false)
let demoTodo3 = Todo("Edit, delete, complete", "")

defaultProject.todos.push(demoTodo1, demoTodo2, demoTodo3)



console.log(defaultProject)