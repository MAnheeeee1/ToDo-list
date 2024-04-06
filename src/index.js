import createTask from "./createToDo";
import displayTask from "./DisplayDom";
const dialog = document.querySelector("dialog");
const createTaskBtn = document.querySelector("button");
dialog.show();

createTaskBtn.addEventListener("click", ()=>{
    const task2 = createTask();
    displayTask(task2);
})
