import { capitalize } from "lodash";

export default function displayTask(tasks){
    let oldDisplayTask = document.querySelector("#tasks");
    const mainSection = document.querySelector("#heroSection");
    oldDisplayTask.remove();
    let displayTask = document.createElement("div");
    displayTask.setAttribute("id", "tasks");
    mainSection.appendChild(displayTask);


    for (const task of tasks){
        const taskCard = document.createElement("div");
        const cardTitle = document.createElement("h1");
        taskCard.classList.add("card");
        cardTitle.textContent = capitalize(task.taskTitle);
        
        displayTask.appendChild(taskCard);
        taskCard.appendChild(cardTitle)
        taskCard.addEventListener("click", ()=>{
            alert("Working");
            const taskInfo = document.createElement("dialog");
            const taskTitle = document.createElement("h1");
            taskTitle.textContent = task.taskTitle;

            const taskDate = document.createElement("p");
            taskDate.textContent = task.taskDueDate;

            const taskPriority = document.createElement("p");
            taskPriority.textContent = task.taskPriority;

            const taskDescription = document.createElement("p");
            taskDescription.textContent = task.taskDescription;


            const closeDialogBtn = document.createElement("button");
            closeDialogBtn.onclick = function(){
                taskInfo.close()
            }

            document.body.appendChild(taskInfo);
            taskInfo.appendChild(closeDialogBtn);
            taskInfo.appendChild(taskTitle);
            taskInfo.appendChild(taskDescription);
            taskInfo.appendChild(taskDate);
            taskInfo.appendChild(taskPriority);
            taskInfo.show();
        })
    }
}