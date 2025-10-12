import { ToDo } from './todo';

const library = [];

const todoManager = {
  addTodo(title, description, dueDate, priority) {
    const task = new ToDo(title, description, dueDate, priority);
    library.push(task);
    return task;
  },

  removeTask(index) {
    library.splice(index, 1);
  },
};
