import { todos } from "./todos.js";

const task = document.getElementById("task");
const desc = document.getElementById("desc");
const addBtn = document.getElementById("add-btn");
const todoContainer = document.querySelector(".todo-container");
let todo, description;

// function to show all tasks
const showTasks = () => {
  const header = document.createElement("div");
  header.classList.add("todo-header");
  header.innerHTML = "Todos";
  todoContainer.appendChild(header);
  if (todos.length === 0) {
    const element = document.createElement("div");
    element.innerHTML += "No Tasks Present";
    element.classList.add("no-tasks");
    todoContainer.appendChild(element);
  } else {
    todos.map((e, idx) => {
      const parentDiv = document.createElement("div");
      parentDiv.classList.add("todo-parent-div");
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo-div");
      const descDiv = document.createElement("div");
      descDiv.classList.add("desc-div");
      const editButton = document.createElement("button");
      editButton.innerHTML = "Edit Task";
      editButton.classList.add("todoContainer-btns");
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("todoContainer-btns");
      deleteButton.innerHTML = "Delete Task";
      todoDiv.innerHTML = e.task;
      descDiv.innerHTML = e.desc;
      parentDiv.appendChild(todoDiv);
      parentDiv.appendChild(descDiv);
      parentDiv.appendChild(editButton);
      parentDiv.appendChild(deleteButton);
      todoContainer.appendChild(parentDiv);

      deleteButton.addEventListener("click", () => {
        deleteTask(idx);
      });
    });
  }
};

const removeChild = () => {
  todoContainer.replaceChildren();
};

(function main() {
  showTasks();
})();

addBtn.addEventListener("click", () => {
  todo = task.value;
  description = desc.value;

  if (todo === "" || description === "") {
    alert("you cannot add empty strings");
    return;
  }

  // the todo to be added
  const todoToBeAdded = {
    id: todos.slice(-1)[0].id + 1,
    task: todo,
    desc: description,
  };
  todos.push(todoToBeAdded);
  removeChild();
  showTasks();
});

const deleteTask = (id) => {
  todos.splice(id, 1);
  removeChild();
  showTasks();
};

// TODO : the update button is pending
