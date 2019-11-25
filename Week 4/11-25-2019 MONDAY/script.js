let aButton = document.getElementById('button')
let list = document.getElementById('tasklist')
task = document.getElementById('input').value

aButton.addEventListener("click", addTask);
 
function addTask() {
        let liItem = document.createElement('li')
        liItem.innerHTML = task
        list.appendChild(liItem)
    }


