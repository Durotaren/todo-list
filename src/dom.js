import trashIcon from './assets/trash.svg';
import { todoManager } from './storage.js';

const input = document.getElementById('todo-input');
const addBtn = document.querySelector('.plus-sign');
const dialog = document.querySelector('dialog');
const closeBtn = document.querySelector('.close-btn');
const submitBtn = document.querySelector('.submit-btn');
const deleteBtns = document.querySelectorAll('.svg-delete');

const dom = (function () {
  addBtn.addEventListener('click', () => {
    if (!input.value.trim()) {
      alert('Please enter a Title for your Task');
      return;
    }
    dialog.showModal();
  });

  closeBtn.addEventListener('click', () => dialog.close());

  submitBtn.addEventListener('click', () => {
    let dueDate = document.getElementById('due-date');
    let priority = document.getElementById('priority');
    const id = crypto.randomUUID();
    dueDate.value = '';
    priority.value = '';
    todoManager.addTodo(input.value, dueDate.value, priority.value, id);
    console.log(todoManager.getAll());
    createTask(input.value, id);
  });

  function createTask(title, id) {
    const taskContainer = document.querySelector('.tasks-container');
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    const taskMain = document.createElement('div');
    taskMain.classList.add('task-main');
    const circle = document.createElement('div');
    circle.classList.add('circle');
    const taskName = document.createElement('div');
    taskName.classList.add('task-name');
    taskName.textContent = title;
    circle.addEventListener('click', () => {
      taskDiv.classList.toggle('completed');
      circle.className === 'circle'
        ? (circle.className = 'circle-done')
        : (circle.className = 'circle');
      taskName.classList.toggle('done');
    });

    let svgs = createSvgs(id);

    svgs.addEventListener('click', () => {
      todoManager.removeTodo(svgs.dataset.id);
      taskDiv.remove();
      console.log(todoManager.getAll());
    });

    taskMain.append(circle, taskName);
    taskDiv.append(taskMain, svgs);
    taskContainer.append(taskDiv);
    input.value = '';
    dialog.close();
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  function createSvgs(id) {
    const svgs = document.createElement('div');
    svgs.classList.add('svgs');
    const svg2 = document.createElement('img');
    svg2.src = trashIcon;
    svg2.classList.add('svg-delete');
    svgs.dataset.id = id;

    svgs.append(svg2);
    return svgs;
  }
})();
