export default function createTask(){
    const taskTitle = document.querySelector("#title").value;
    const taskDescription = document.querySelector("#description").value;
    const taskDueDate = document.querySelector("#date").value;
    const taskPriority = document.querySelector("#priority").value;

    return {taskTitle, taskDescription, taskDueDate, taskPriority};
}

