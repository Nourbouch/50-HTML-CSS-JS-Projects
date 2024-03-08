export class App {
  constructor(input, list) {
    this.input = input;
    this.list = list;
  }

  addTodo() {
    const todo = this.input.value;
    if (todo.trim() !== "") {
      this.list.innerHTML += `<li>${todo}</li>`;
      this.input.value = "";
      this.input.focus();
    }
  }
}
