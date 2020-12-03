//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list"); 
const filterOption = document.querySelector(".filter-todo");

//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener('click', filterTodo);


//functions
function addTodo(Event){
    Event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa fa-check"></i>';
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa fa-trash"></i>';
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)

    todoInput.value = '';
}

function deleteCheck(e){
     

    const item = e.target;
    const upitem = item.parentElement;
     if (item.classList[0]  === "trash-btn"){
        upitem.classList.add('fall')
        upitem.addEventListener("transitionend", function end(){
            upitem.remove()
        })
         
    } 
    if (item.classList[0]  === "complete-btn"){
        const upitem = item.parentElement;
        upitem.classList.toggle('completed')
    } 
}

function filterTodo(e){ 
    const todos = todoList.childNodes;
    todos.forEach(function(todo){ 
        switch(e.target.value) {
            case "all":  
            todo.style.display = "flex";
            break;
        case "completed":
            if (todo.classList.contains("completed")){
                todo.style.display = "flex";
            } 
            else{
                todo.style.display = "none";
            }
            break;
        
            case "incomplete":
                if (!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } 
                else{
                    todo.style.display = "none";
                }
                break;    
        }
    })
}