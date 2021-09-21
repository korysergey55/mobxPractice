import { makeAutoObservable, configure, computed, observable, action } from "mobx";
observer

class Todo {
  todos = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  ]
  filter = ""
  length = ""

  constructor() {
    makeAutoObservable(this, {
      todos: observable,
      filter: observable,
      filterTodo: computed,
      lengthTodo: computed,
      addTodo: action,
      removeTodo: action,
      updateFilter: action,
      setUser:action,
      fetchTodos: action.bound, // flow , bound
    })
  }
  addTodo(todo) {
    this.todos.push(todo)
  }
  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }
  updateFilter(value) {
    this.filter = value
  }
  get lengthTodo() {
    return this.length = this.todos.length
  }
  get filterTodo() {
    const mobxContacts = this.filter?.toLowerCase().trim();
    const filteredContacts = this.todos.filter((contact) =>
      contact.name.toLowerCase().includes(mobxContacts));
    return filteredContacts;
  }
  fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(newTodoApi => {
        this.setUser(newTodoApi)
      })
  }
  setUser(newTodoApi) {
    this.todos = [...this.todos, ...newTodoApi]
  }
}
export default new Todo();