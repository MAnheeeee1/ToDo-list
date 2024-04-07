import createTask from "./createToDo";
import displayTask from "./DisplayDom";
import _ from 'lodash';
import './style.css';

const dialog = document.querySelector("dialog");
const createTaskBtn = document.querySelector("#addTask");
const closeDialogBtn = document.getElementById("closeDialog");
const openDialogBtn = document.getElementById("openDialog");

let allTasks = [[]];

closeDialogBtn.addEventListener("click", ()=>{
    dialog.close()
})

openDialogBtn.addEventListener("click", ()=>{
    dialog.show()
    console.log(allTasks);
})

createTaskBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    const task = createTask();
    allTasks[0].push(task);
    displayTask(allTasks[0]);
    dialog.close();
})
