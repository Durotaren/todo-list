import editIcon from './assets/edit.svg';
import trashIcon from './assets/trash.svg';

const input = document.getElementById('todo-input');
const addBtn = document.querySelector('.plus-sign');
const dialog = document.querySelector('dialog');
const closeBtn = document.querySelector('.close-btn');

export const dom = (function () {
  addBtn.addEventListener('click', () => {
    dialog.showModal();
  });

  closeBtn.addEventListener('click', () => dialog.close());

  function createTask() {
    if (!input.value.trim()) {
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
    input.value = '';
    dialog.closeModal();
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
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
})();
