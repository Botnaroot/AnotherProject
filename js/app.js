

const todo = document.getElementById("todo");
const addBtn = document.getElementById("add");
const todos = document.getElementById("todos");
let todoItems = [];
let counter = 0;

function addTodo() {
    console.log(todo.value);
    //todos.innerHTML += `<p>${todo.value}</p>`;
    counter += 1;
    let todoObj = {
        id: counter,
        todo: todo.value,
        date: new Date()
    }
    //console.log(todoObj);
    todoItems.push(todoObj);
    console.log(todoItems);
    todo.value = "";
    showTodos();
}

function showTodos() {
    todos.innerHTML = '';
    todoItems.map(todo => {
        todos.innerHTML += `
            <div id="tod" class="todo bg0">
                <h2 id="texttodo">${todo.todo}</h2>
                <div id="timeAndButtons">
                    <div>
                        <p>${todo.date.getHours()}:${todo.date.getMinutes()}:${todo.date.getSeconds()}</p>
                        <p>${todo.date.getDate()}-${todo.date.getMonth()}-${todo.date.getFullYear()}</p>
                    </div>
                    <div id="buttonss">
                        <button onclick="updateTodo(${todo.id})">Update</button>
                        <button onclick="deleteTodo(${todo.id})">Delete</button>
                    </div>
                </div>
                </div>
        `;
    });
}

function updateTodo(id) {
    let newValue = prompt("New to do text:");
    todoItems = todoItems.map(todo => {
        if(todo.id === id) {
            return {...todo, todo: newValue};
        } else {
            return todo;
        }
    })
    showTodos();
}

function deleteTodo(id) {
    todoItems = todoItems.filter(todo => {
        if (todo.id !== id) {
            return todo;
        }
    })
    showTodos();
}


addBtn.addEventListener("click", addTodo);




/*=========*/




const body = document.querySelector("body");
const appBg = document.getElementById("appBg");

appBg.addEventListener("click", () => {
    if(body.classList.contains("image1")) {
        body.classList.remove("image1");
        body.classList.add("image2");
    } else if(body.classList.contains("image2")) {
        body.classList.remove("image2");
        body.classList.add("image3");
    } else if(body.classList.contains("image3")) {
        body.classList.remove("image3");
        body.classList.add("image4");
    } else if(body.classList.contains("image4")) {
        body.classList.remove("image4");
        body.classList.add("image5");
    } else {
        body.classList.remove("image5");
        body.classList.add("image1");
    }
});


const i = document.getElementById("i")
const noteBg = document.getElementById("noteBg");

noteBg.addEventListener("click", () => {
    if(i.classList.contains("bg0")) {
        i.classList.remove("bg0");
        i.classList.add("bg1");
    } else if(i.classList.contains("bg1")) {
        i.classList.remove("bg1");
        i.classList.add("bg2");
    } else if(i.classList.contains("bg2")) {
        i.classList.remove("bg2");
        i.classList.add("bg3");
    } else if(i.classList.contains("bg3")) {
        i.classList.remove("bg3");
        i.classList.add("bg4");
    } else if(i.classList.contains("bg4")) {
        i.classList.remove("bg4");
        i.classList.add("bg5");
    } else {
        i.classList.remove("bg5");
        i.classList.add("bg0");
    }
});


