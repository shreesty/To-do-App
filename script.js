

const taskInput = document.getElementById("taskInput");
const enterButton = document.getElementById("enterButton");
const taskList = document.getElementById("task-list");


enterButton.addEventListener("click", () => {
    const task = taskInput.value.trim();
  
   
    if (task === "") {
        alert("Please enter a task.");
        return;
      }
    
      const listItem = document.createElement("li");
      const checkbox = document.createElement("input");
      const taskText = document.createElement("span");
    
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", () => {
       
      });
    
      taskText.textContent = task;
    
      listItem.appendChild(checkbox);
      listItem.appendChild(taskText);
      taskList.appendChild(listItem);
    
      taskInput.value = "";
    });
    
 








































// let headerTitle = document.getElementById('#header-title');
// // headerTitle.textContent ="Hello";

// let tasks = document.getElementsByClassName('list-group-task')

// let input=document.querySelector('input');
// input.style.color="blue";
// input.style.backgroundColor="lightgrey";


// // let Enter= document.querySelector('#add-btn');

// let oddTask = document.querySelectorAll('li:nth-child(odd)');


// for(let i=0;i< oddTask.length;i++)
// {
//     oddTask[i].style.color="red";
// }


// let titles=document.querySelector('.title');
// titles.style.color="purple";