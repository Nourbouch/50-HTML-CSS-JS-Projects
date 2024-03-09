import { App } from "./main.js";

const form = document.forms[0];
const input = document.getElementById("input");
const addBtn = document.getElementById("add");
const listOfTodos = document.getElementById("todos-list");

const TodoApp = new App(input, listOfTodos);

function add() {
  TodoApp.addTodo();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  add();
});

addBtn.addEventListener("click", add);

TodoApp.loadFromLocalStorage();
