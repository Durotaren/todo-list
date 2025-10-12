import { ToDo } from './todo';

const projects = [];
let library = [];

export const todoManager = {
  addTodo(title, dueDate, priority, id) {
    const task = new ToDo(title, dueDate, priority, id);
    library.push(task);
    return task;
  },

  getAll() {
    return library;
  },

  removeTodo(id) {
    library = library.filter((toDo) => toDo.uniqueId !== id);
  },
};
