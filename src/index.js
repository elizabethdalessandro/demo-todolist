
let todoItems = [
    { title: 'Clean the kitchen', checked: false },
    { title: 'Water the plant', checked: true },
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

                let icon = document.createElement('div');
                icon.className = 'icon';
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

            let remove = document.createElement('button');
            remove.className = 'remove';
            remove.innerText = 'X';
            remove.onclick = function () {
                todoItems = todoItems.filter(i => i !== item);
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

    plusIcon.onclick = function () {
        let itemTitle = input.value;
        input.value = ' ';
        
        let todoItem = { title: itemTitle, checked: false };
        todoItems.push(todoItem);
        updateDOM();
    };


    updateDOM();
}

