/*
  Selector
*/
const  todoInput = document.querySelector(".todo-input");
const  todoButton = document.querySelector(".todo-button");
const  todoList = document.querySelector(".todo-list");

/*
  Evenet Listener
*/

todoButton.addEventListener("click", addTodo);

/*
  Function
*/

function addTodo(event) {

  //preventing form from submiting
  event.preventDefault();

  //Creating div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-item");
  //Creating li tag
  const todoLi = document.createElement("li");
  todoLi.classList.add("todo");
  todoLi.innerText = `${todoInput.value}`;
  //adding in div
  todoDiv.appendChild(todoLi);
  //Create check button..
  const checkedButton = document.createElement("button");
  checkedButton.classList.add("check-button");
  checkedButton.innerHTML = '<i class="fas fa-check"></i>'
  todoDiv.appendChild(checkedButton);
  //Create trash button..
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>'
  todoDiv.appendChild(trashButton);

  //adding todo div into todo list
  todoList.appendChild(todoDiv);

  // clear todo Input Value 
  todoInput.value="";

}
