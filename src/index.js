import createTask from "./createToDo";
import displayTask from "./DisplayDom";
import { displayProjects } from "./DisplayDom";
import createProject from "./createProjects";
import _ from 'lodash';
import './style.css';

const dialog = document.querySelector("dialog");
const createTaskBtn = document.querySelector("#addTask");
const closeDialogBtn = document.getElementById("closeDialog");
const openDialogBtn = document.getElementById("openDialog");

const projectsList = document.getElementById("projects");
const addProjectBtn = document.getElementById("addProject");
addProjectBtn.addEventListener("click", ()=>{
    let name = prompt("Project name");
    name = createProject(name);
})
let homeProject = createProject("home");


closeDialogBtn.addEventListener("click", ()=>{
    dialog.close()
})

openDialogBtn.addEventListener("click", ()=>{
    dialog.show()
    console.log(homeProject);
})

createTaskBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    const task = createTask();
    homeProject.tasks.push(task);
    console.log(typeof(homeProject.tasks));
    displayTask(homeProject.tasks);
    dialog.close();
})
