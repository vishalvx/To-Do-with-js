/*
  Selector
*/
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoFilter = document.querySelector(".todo-select");

/*
  Evenet Listener
*/

todoButton.addEventListener("click", addTodo);
//we add event listener to whole ul tag because we getall li access with butttons
todoList.addEventListener("click", deleteCheckTodo);
// FOR Select bar 
todoFilter.addEventListener("click",todoOption)

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
  checkedButton.innerHTML = '<i class="fas fa-check"></i>';
  todoDiv.appendChild(checkedButton);
  //Create trash button..
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  todoDiv.appendChild(trashButton);

  //adding todo div into todo list
  todoList.appendChild(todoDiv);

  // clear todo Input Value
  todoInput.value = "";
}

function deleteCheckTodo(e) {
  const item = e.target;
  // console.log(item);

  //DELETE TODO by checking class ==="fa-trash"
  if (item.classList[0]==="trash-button") {
    const  todo=item.parentElement;
    //animation
    todo.classList.add("skip");
    todo.addEventListener("transitionend",function() {
      todo.remove();
    })
  }
  if (item.classList[0]==="check-button") {
    item.parentElement.classList.toggle("completed");
  }
}


function todoOption(e){
  // getting all the element as nodes from todoList 
  const todos = todoList.childNodes;
  // console.log(e.target.value);
  todos.forEach(function(todo) {
    
    switch (e.target.value) {
      case "all":
        todo.style.display="flex";
        break;
      case "completed":
        if(todo.classList.contains("completed")){
          todo.style.display="flex";
        }else{
          todo.style.display="none";
        }
        break;
      case "uncompleted":
          if(!todo.classList.contains("completed")){
            todo.style.display="flex";
          }else{
            todo.style.display="none";
          }
          break;
    }
  })
}