import { capitalize } from "lodash";
import { getCurrentProject, setCurrentProject } from ".";
debugger;
export default function displayTask(tasks){
    refreshList();

    function refreshList(){
        console.log("refreshList()");
        let oldDisplayTask = document.querySelector("#tasks");
        const mainSection = document.querySelector("#heroSection");
        oldDisplayTask.remove();
        let displayTask = document.createElement("div");
        displayTask.setAttribute("id", "tasks");
        mainSection.appendChild(displayTask);
        for (const task of tasks) {
            const taskCard = document.createElement("div");
            const titleSectionTASKCARD = document.createElement("div");
            titleSectionTASKCARD.classList.add("titleSection");
            const btnSectionTASKCARD = document.createElement("div");
            btnSectionTASKCARD.classList.add("btnSection");
            const cardTitle = document.createElement("h1");
            cardTitle.classList.add("cardTitle");
            cardTitle.style.fontSize = "1rem";


            displayTask.appendChild(taskCard);
            taskCard.appendChild(titleSectionTASKCARD);
            taskCard.appendChild(btnSectionTASKCARD);

            cardTitle.textContent = capitalize(task.taskTitle);
            
            titleSectionTASKCARD.appendChild(cardTitle);
            taskCard.classList.add("card");
    
            const deleteButton = document.createElement("button");
            deleteButton.setAttribute("id", "delete");
            deleteButton.innerHTML = "Delete";
            deleteButton.addEventListener("click", ()=>{
                deleteTask(tasks, task);
                refreshList();
            });

            const editButton = document.createElement("button");
            editButton.setAttribute("id", "edit");
            editButton.innerHTML = "Edit";
            btnSectionTASKCARD.appendChild(editButton);
            editButton.addEventListener("click", (event)=> {event.preventDefault()
            editTask(task)});
            
            btnSectionTASKCARD.appendChild(deleteButton);
            titleSectionTASKCARD.addEventListener("click", ()=>{
                addTaskInfo(task);
                });
        };
    }
    function editTask(task){
        console.log("editTask()");
        console.log(task);
        const dialog = document.querySelector("#editTaskDialog");
        const submitButton = document.querySelector("#editTaskBtn");
        dialog.show();
        const taskTitle = document.querySelector("#editTitle");
        const taskDescription = document.querySelector("#editDescription");
        const taskDueDate = document.querySelector("#editDate");
        const taskPriority = document.querySelector("#editPriority");
        taskTitle.value = task.taskTitle;
        taskDescription.value = task.taskDescription;
        taskDueDate.value = task.taskDueDate;
        taskPriority.value = task.taskPriority;
    
        submitButton.onclick = function(event) {
            editTaskInfo(event, task);
        };

        function editTaskInfo(event){
            console.log("editTaskInfo()");
            event.preventDefault();
            task.taskTitle = taskTitle.value;
            console.log(task.taskTitle);
            task.taskDescription = taskDescription.value;
            console.log(task.taskDescription);
            task.taskDueDate = taskDueDate.value;
            task.taskPriority = taskPriority.value;
            dialog.close();
            refreshList();
        }
    
    }

    //Functions 
    function deleteTask(tasks, task){
        console.log("deleteTask()");
        const index = tasks.indexOf(task);
        if (index !== -1){
            tasks.splice(index, 1);
        }
    }

    function addTaskInfo(task){
        console.log("addTaskInfo()");
        console.log(task);
        const taskInfo = document.createElement("dialog");
        console.log(taskInfo);    
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
            taskInfo.close();
        };
    
        document.body.appendChild(taskInfo);
        taskInfo.appendChild(closeDialogBtn);
        taskInfo.appendChild(taskTitle);
        taskInfo.appendChild(taskDescription);
        taskInfo.appendChild(taskDate);
        taskInfo.appendChild(taskPriority);
        taskInfo.show();
    }
}
export function displayProjects(projectList){
    console.log(")");
    const sideMenu = document.querySelector("#sidebar");
    const oldProjects = document.querySelector("#projects");
    oldProjects.remove();
    const updatedProjectList = document.createElement("ul");
    sideMenu.appendChild(updatedProjectList);
    updatedProjectList.setAttribute("id", "projects");
    

    for (const project of projectList){
        let projectLi = document.createElement("li");
        projectLi.textContent = project.name;
        updatedProjectList.appendChild(projectLi);
        projectLi.addEventListener("click", ()=>{
            setCurrentProject(project);
            console.log(getCurrentProject());
            displayTask(getCurrentProject().tasks);
        })

    }
    


}



