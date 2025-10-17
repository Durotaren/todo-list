import { ToDo } from './todo';

let library = [
  {
    title: 'Wash the dishes',
    dueDate: '22/02/2090',
    priority: 'Low priority',
    uniqueId: '1',
  },
  {
    title: 'Walk the dog',
    dueDate: '22/02/2090',
    priority: 'High priority',
    uniqueId: '2',
  },
  {
    title: 'Buy groceries',
    dueDate: '22/02/2090',
    priority: 'Low priority',
    uniqueId: '3',
  },
];

let projects = [library];

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
