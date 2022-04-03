let todoItems = [
    /*{ title: 'Clean the kitchen', checked: false },
    { title: 'Water the plant', checked: true },
    */
];
let doneTasks = 0;


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
                };
                
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
    let invent = document.getElementsByClassName("status checked").length;
    console.log(invent);


    document.getElementById("w-done").innerText = "";
    document.getElementById("accomp").innerText = "";
    document.getElementById("done-tasks").innerText = "";
    document.getElementById("already").innerText = "";
    document.getElementById("k-going").innerText = "";
    if (invent > 0){
        document.getElementById("w-done").innerText = "Well done";
        document.getElementById("accomp").innerText = "You have accomplished";
        document.getElementById("done-tasks").innerText = invent;
        document.getElementById("already").innerText = "tasks already";
        document.getElementById("k-going").innerText = "Keep going!";
        if(invent == 1){
            document.getElementById("already").innerText = "task already";
        };
    };
}



window.onload = function() {
    
    let plusIcon = document.querySelector('.todo-new .add');
    let input = document.querySelector('.todo-new .input');

    input.onkeydown = function(e) {
        //console.log(e);
        if (e.key === "Enter"){
            plusIcon.onclick();
            
        }
    }

    let invent = document.getElementsByClassName("status checked").length;
    console.log(invent);

    plusIcon.onclick = function () {
        let itemTitle = input.value;
        input.value = '';
        
        let todoItem = { title: itemTitle, checked: false };
        if (itemTitle !== "") {
            todoItems.push(todoItem);
        }
        updateDOM();
    }


    updateDOM();
}
