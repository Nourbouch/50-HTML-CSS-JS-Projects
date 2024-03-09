export class App {
  constructor(input, list) {
    this.input = input;
    this.list = list;
    this.arr = [];
    this.loadFromLocalStorage();
  }

  addTodo() {
    const todo = this.input.value;
    if (todo.trim() !== "") {
      const obj = {
        todo: todo,
        completed: false,
        id: new Date().getTime(),
      };

      const element = document.createElement("li");
      element.innerHTML = todo;
      element.dataset.id = obj.id;
      element.addEventListener("click", () => this.toggleCompletion(obj.id));

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete");
      deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
      deleteButton.addEventListener("click", (event) => {
        event.stopPropagation();
        this.removeTodo(obj.id);
      });

      const editButton = document.createElement("button");
      editButton.classList.add("edit");
      editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
      editButton.addEventListener("click", (event) => {
        event.stopPropagation();
        const newText = prompt("Enter new todo:");
        if (newText !== null) {
          this.editTodo(obj.id, newText);
        }
      });

      let btns = document.createElement("div");
      btns.classList.add("btns");
      btns.appendChild(deleteButton);
      btns.appendChild(editButton);
      element.appendChild(btns);

      this.list.appendChild(element);

      // Reset input value and focus
      this.input.value = "";
      this.input.focus();

      this.arr.push(obj);
      this.addToLocalStorage(this.arr);
    }
  }

  toggleCompletion(id) {
    const index = this.arr.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.arr[index].completed = !this.arr[index].completed;
      this.renderTodos();
    }
  }

  removeTodo(id) {
    this.arr = this.arr.filter((todo) => todo.id !== id);
    this.renderTodos();
    this.addToLocalStorage(this.arr);
  }

  editTodo(id, newText) {
    const index = this.arr.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.arr[index].todo = newText;
      this.renderTodos();
      this.addToLocalStorage(this.arr);
    }
  }

  renderTodos() {
    this.list.innerHTML = "";
    this.arr.forEach((todo) => {
      const element = document.createElement("li");
      element.innerHTML = todo.todo;
      element.dataset.id = todo.id;
      if (todo.completed) {
        element.classList.add("completed");
      }
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete");
      deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
      deleteButton.addEventListener("click", (event) => {
        event.stopPropagation();
        this.removeTodo(todo.id);
      });
      const editButton = document.createElement("button");
      editButton.classList.add("edit");
      editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
      editButton.addEventListener("click", (event) => {
        event.stopPropagation();
        const newText = prompt("Enter new todo:");
        if (newText !== null) {
          this.editTodo(todo.id, newText);
        }
      });
      let btns = document.createElement("div");
      btns.classList.add("btns");
      btns.appendChild(deleteButton);
      btns.appendChild(editButton);
      element.appendChild(btns);
      element.addEventListener("click", () => this.toggleCompletion(todo.id)); // Move the event listener to the list item
      this.list.appendChild(element);
    });
  }

  addToLocalStorage(arr) {
    localStorage.setItem("todos", JSON.stringify(arr));
  }

  loadFromLocalStorage() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      this.arr = todos;
      this.renderTodos();
    }
  }
}
