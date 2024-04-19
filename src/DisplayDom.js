import { capitalize } from "lodash";
import { getCurrentProject, setCurrentProject } from ".";
export default function displayTask(tasks){
    refreshList();

    function refreshList(){
        let oldDisplayTask = document.querySelector("#tasks");
        const mainSection = document.querySelector("#heroSection");
        oldDisplayTask.remove();
        let displayTask = document.createElement("div");
        displayTask.setAttribute("id", "tasks");
        mainSection.appendChild(displayTask);
        for (const task of tasks) {
            const taskCard = document.createElement("div");
            const titleSectionTASKCARD = document.createElement("div");
            const btnSectionTASKCARD = document.createElement("div");
            const cardTitle = document.createElement("h1");

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
            editButton.addEventListener("click", ()=> editTask(task));
            
            btnSectionTASKCARD.appendChild(deleteButton);
            titleSectionTASKCARD.addEventListener("click", ()=>{
                addTaskInfo(task);
                });
        };
    }
    function editTask(task){
        console.log("Edittask function has been called!")
        const dialog = document.querySelector("#editTaskDialog");
        dialog.show();
        const taskTitle = document.querySelector("#title");
        const taskDescription = document.querySelector("#description");
        const taskDueDate = document.querySelector("#date");
        const taskPriority = document.querySelector("#priority");
        taskTitle.innerHTML = task.taskTitle;
        taskDescription.innerHTML = task.taskDescription;
        taskDueDate.value = task.taskDueDate;
        taskPriority.value = task.taskPriority;
    
    }

    //Functions 
    function deleteTask(tasks, task){
        const index = tasks.indexOf(task);
        if (index !== -1){
            tasks.splice(index, 1);
        }
    }

    function addTaskInfo(task){
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



