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
const form = document.querySelector("#addTaskForm");

let allProjects = [];
let currentProject;
const projectsList = document.getElementById("projects");
const addProjectBtn = document.getElementById("addProject");
addProjectBtn.addEventListener("click", ()=>{
    let name = prompt("Project name");
    let project = createProject(name);
    allProjects.push(project);
    displayProjects(allProjects)
    localStorage.setItem("allProjects", JSON.stringify(allProjects));
})

let homeProject = createProject("home");
currentProject = homeProject;
allProjects.push(currentProject);
localStorage.setItem("allProjects", JSON.stringify(allProjects));
let homeLi = document.createElement("li");
homeLi.textContent = currentProject.name;
projectsList.appendChild(homeLi);

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
    currentProject.tasks.push(task);
    localStorage.setItem("allProjects", JSON.stringify(allProjects));
    displayTask(currentProject.tasks);
    form.reset();
    dialog.close();
})
let debugBtn = document.querySelector("#debugButton");
debugBtn.onclick = function(){
    let storage = JSON.parse(localStorage.getItem("allProjects"));
    console.log(storage[0]);
}

export function getCurrentProject() {
    return currentProject;
}

export function setCurrentProject(project) {
    currentProject = project;
}


    