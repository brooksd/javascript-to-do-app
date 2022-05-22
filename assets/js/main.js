//DOM Selectors

const textInput = document.querySelector(".textInput");
const addButton = document.querySelector(".addButton");
const todoList = document.querySelector(".todoList");

//Event Listeners

addButton.addEventListener("click", addTodo);

// Functions

function addTodo(event) {
    event.preventDefault();
// ToDo Container Div
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo");
// Creating the li
    const newTodoLi = document.createElement("li");
    newTodoLi.innerText = "hey";
    newTodoLi.classList.add("todoItem");
    todoContainer.appendChild(newTodoLi);
//  Creating the Checkmark Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check">+</i>';
    completedButton.classList.add("completeBtn");
    todoContainer.appendChild(completedButton);
// Creating the Delete Button
    const binButton = document.createElement("button");
    binButton.innerHTML = '<i class="fas fa-trash">+</i>';
    binButton.classList.add("binBtn");
    todoContainer.appendChild(binButton);
    // Appending to the List
    todoList.appendChild(todoContainer);
}