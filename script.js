/*
  Selector
*/

let toDoList = document.querySelector("#todo-list");
const addButton = document.querySelector("#todo-button");
let todoItems = toDoList.children;
// console.log(toDoList);
/*
  Evenet Listener
*/

addButton.addEventListener("click", addTodo);

/*
  Function
*/

function addTodo() {
  const newTodo = document.createElement("li");
  newTodo.classList.add("todos");
  newTodo.innerText = "todo";
  todoItems.appendChild(newTodo);
}
