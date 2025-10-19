import { ToDo } from './todo';

let library;

let flag = localStorage.getItem('flag') === 'true';

let defaults = [
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

export const todoManager = {
  addTodo(title, dueDate, priority, id) {
    const task = new ToDo(title, dueDate, priority, id);
    library.push(task);
    this.save();
    return task;
  },

  getAll() {
    return library;
  },

  getFlag() {
    return flag;
  },

  removeTodo(id) {
    library = library.filter((toDo) => toDo.uniqueId !== id);
    this.save();
  },

  save() {
    localStorage.setItem('todos', JSON.stringify(library));
  },

  load() {
    try {
      const saved = JSON.parse(localStorage.getItem('todos'));
      if (Array.isArray(saved)) {
        library = saved;
      } else {
        library = defaults;
      }
    } catch (error) {
      console.error('Error loading todos:', todos);
      library = defaults;
    }
  },
};

todoManager.load();
