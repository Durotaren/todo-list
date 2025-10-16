import { ToDo } from './todo';

let projects = [];

let library = [
  { title: 'Wash the dishes', dueDate: '', priority: '', uniqueId: '1' },
  { title: 'Walk the dog', dueDate: '', priority: '', uniqueId: '2' },
  { title: 'Buy groceries', dueDate: '', priority: '', uniqueId: '3' },
];

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
