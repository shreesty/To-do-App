
let addTask=document.getElementById('add-task');
let inputTask=document.getElementById('input-task');
let taskContainer=document.getElementById('task-container');

window.addEventListener('keydown',function(e)
{
   if(e.key==="Enter")
   {
let task=document .createElement('div');
task.classList.add('task');

let li=document.createElement('li');
li.innerText=`${inputTask.value}`; 
task.appendChild(li);

let checkButton=document.createElement('button');
checkButton.innerHTML='<i class="completed">Completed</i>';
checkButton.classList.add('checkTask');
task.appendChild(checkButton); 


let deleteButton=document.createElement('button');
deleteButton.innerHTML='<i class="delete">Delete</i>';
deleteButton.classList.add('deleteTask');
task.appendChild(deleteButton)

if(inputTask.value==="")
{
    alert("Please enter a task!")
}
else
{
    taskContainer.appendChild(task);
}

inputTask.value="";

checkButton.addEventListener("click",function()
{
    if (checkButton.innerText === "Completed")
    {
        li.style.textDecoration="line-through";
        checkButton.innerText="Undo";
    }
    else

    {
        li.style.textDecoration="none";
        checkButton.innerHTML="Completed";
    }
});


deleteButton.addEventListener("click",function(e)
{
    
    task.remove();
})
}


});