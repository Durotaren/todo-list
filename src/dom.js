import { ToDo } from './todo';
import editIcon from './assets/edit.svg';
import trashIcon from './assets/trash.svg';
import library from './storage.js';

export const dom = (function () {
  const addBtn = document.querySelector('.plus-sign');

  addBtn.addEventListener('click', () => {
    createTask();
  });

  function createTask() {
    const input = document.getElementById('todo-input');
    if (input.value === '') {
      alert('Please enter a Title for your Task');
      return;
    }
    const taskContainer = document.querySelector('.tasks-container');
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    const taskMain = document.createElement('div');
    taskMain.classList.add('task-main');
    const circle = document.createElement('div');
    circle.classList.add('circle');
    const taskName = document.createElement('div');
    taskName.classList.add('task-name');
    taskName.textContent = input.value;

    let svgs = createSvgs();
    taskMain.append(circle, taskName);
    taskDiv.append(taskMain, svgs);
    taskContainer.append(taskDiv);
    let task = new ToDo(input.value);
    library.push(task);
    closeModal();
    input.value = '';
    console.log(library);
    console.log(ToDo.counter);
  }

  function createSvgs() {
    const svgs = document.createElement('div');
    svgs.classList.add('svgs');
    const svg1 = document.createElement('img');
    svg1.src = editIcon;
    svg1.classList.add('svg');
    const svg2 = document.createElement('img');
    svg2.src = trashIcon;
    svg2.classList.add('svg');

    svgs.append(svg1, svg2);
    return svgs;
  }

  function closeModal() {
    const closeBtn = document.querySelector('.close-btn');
    const dialog = document.querySelector('dialog');
    closeBtn.addEventListener('click', () => dialog.close());
    dialog.showModal();
  }
})();
