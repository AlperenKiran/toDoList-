const toDoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".todoButton");
const todoul = document.querySelector(".todos");

// console.log(todoButton, todoInput, todoul);

const renderTodoItem = (todotext) => {
  const todoItemElement = document.createElement("li");
  todoItemElement.classList.add("todoItem");

  const completeButton = document.createElement("button");
  completeButton.classList.add("completeButton");
  completeButton.innerHTML = "<i>completed</i>";
  completeButton.addEventListener("click", toggleComplete);
  todoItemElement.appendChild(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.innerHTML = "<i>Delete</i>";
  deleteButton.addEventListener("click", removeItem);
  todoItemElement.appendChild(deleteButton);

  const textElement = document.createElement("p");
  textElement.innerText = todotext;
  textElement.classList.add("todotext");
  todoItemElement.appendChild(textElement);

  todoul.appendChild(todoItemElement);
  todoInput.value = "";
  todoInput.focus();
};

const addTask = () => {
  if (toDoInput == "") {
    alert("Input boş olamaz");
  } else {
    renderTodoItem(toDoInput.value);
  }
};

todoButton.addEventListener("click", addTask);

const toggleComplete = (e) => {
  const { parentElement } = e.currentTarget; ///desctraction

  const isComplete = [...parentElement.classList].some(
    (className) => className === "completed"
  );
  if (!isComplete) {
    e.currentTarget.innerText = "Todo";
  } else {
    e.currentTarget.innerText = "completed";
  }
  e.currentTarget.parentElement.classList.toggle("completed");
};

const removeItem = (e) => {
  todoul.removeChild(e.currentTarget.parentElement);
};
