let taskNameTextBox = document.getElementById("taskBox")
let addButton = document.getElementById("submitTask")
let taskList = document.getElementById('taskList')
let completedTaskList = document.getElementById('completedTaskList')


function moveItem(obj) {
    let li = obj.parentElement
    if(obj.checked) {
        completedTaskList.appendChild(li)
        console.log('Task marked as COMPLETE!')
    } else {
        console.log('Task marked as INCOMPLETE')
        taskList.appendChild(li)
    }
}

function removeItem(obj) {
    let li = obj.parentElement //li to be removed
    try {
    taskList.removeChild(li)
    }
    catch(error) {
    completedTaskList.removeChild(li)
    }
}

addButton.addEventListener("click", function(){
    let taskName = taskNameTextBox.value    
    let liItem = `<li>
                    <input type='checkbox' onclick='moveItem(this)' class="checkbox"/>
                    <label>${taskName}</label>
                    <button onclick='removeItem(this)'>Remove</button>
                    </li>`
    taskList.insertAdjacentHTML('beforeend',liItem)
        

})
