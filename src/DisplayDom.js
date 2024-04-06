export default function displayTask(task){
    const test = document.createElement("p");
    test.textContent = `${task.taskTitle} ${task.taskDescription} ${task.taskPriority}`;

    document.body.appendChild(test);
}