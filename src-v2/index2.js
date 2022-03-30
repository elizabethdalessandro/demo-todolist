let todoItems = [
    /*{ title: 'Clean the kitchen', checked: false },
    { title: 'Water the plant', checked: true },
    */
];

function updateDOM() {
    let todoList = document.querySelector('.todo-list');
    todoList.innerHTML = '';
    
    for (let item of todoItems) {
        
        let todoItem = document.createElement('div');
        {
            todoItem.className = 'todo-item';
            
            let status = document.createElement('div');
            {
                status.className = 'status';
                if (item.checked) {
                    status.className = status.className + ' checked';
                }
                
                let icon = document.createElement('i');
                icon.className = 'fa fa-check';
                status.appendChild(icon);
                
                status.onclick = function () {
                    item.checked = !item.checked;
                    updateDOM();
                };
            }
            todoItem.appendChild(status);

            let title = document.createElement('div');
            title.className = 'title';
            title.innerText = item.title;
            todoItem.appendChild(title);

            let remove = document.createElement('i');
            remove.className = 'fa fa-trash';
            remove.onclick = function () {
                todoItems = todoItems.filter(j => j !== item);
                updateDOM();
            };
            todoItem.appendChild(remove);
        }
        todoList.appendChild(todoItem);
    }
}
window.onload = function() {
    let plusIcon = document.querySelector('.todo-new .add');
    let input = document.querySelector('.todo-new .input');
    
    input.onkeyup = function(e) {
        if (e.key === "Enter"){
            plusIcon.onclick();
        }
    }

    plusIcon.onclick = function () {
        let itemTitle = input.value;
        input.value = '';
        
        let todoItem = { title: itemTitle, checked: false };
        if (itemTitle !== "") {
            todoItems.push(todoItem);
        }
        updateDOM();
    };


    updateDOM();
}
