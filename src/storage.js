import { ToDo } from './todo';

let library;

let flag = localStorage.getItem('flag') === 'true';

let defaults = [
  {
    title: 'Wash the dishes',
    dueDate: '2090-02-22',
    priority: 'Low priority',
    uniqueId: '1',
    state: 'incomplete',
  },
  {
    title: 'Walk the dog',
    dueDate: '2090-02-22',
    priority: 'High priority',
    uniqueId: '2',
    state: 'complete',
  },
  {
    title: 'Buy groceries',
    dueDate: '2090-02-22',
    priority: 'Low priority',
    uniqueId: '3',
    state: 'incomplete',
  },
];

export const todoManager = {
  addTodo(title, dueDate, priority, id, state) {
    const task = new ToDo(title, dueDate, priority, id, state);
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

  switchState(id) {
    const foundItem = library.find((item) => item.uniqueId === id);

    foundItem.state === 'complete'
      ? (foundItem.state = 'incomplete')
      : (foundItem.state = 'complete');

    this.save();
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
