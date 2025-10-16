import trashIcon from './assets/trash.svg';
import { format } from 'date-fns';
import { todoManager } from './storage.js';

const dom = (function () {
  const input = document.getElementById('todo-input');
  const addBtn = document.querySelector('.plus-sign');
  const dialog = document.querySelector('dialog');
  const closeBtn = document.querySelector('.close-btn');
  const submitBtn = document.querySelector('.submit-btn');
  const tasksContainer = document.querySelector('.tasks-container');

  const circleFirst = document.querySelector('.circle');

  function handleCircleClick() {
    circleFirst.previousElementSibling.remove();
    circleFirst.removeEventListener('click', handleCircleClick);
  }

  circleFirst.addEventListener('click', handleCircleClick);

  tasksContainer.addEventListener('click', (e) => {
    const taskDiv = e.target.closest('.task');
    if (e.target.classList.contains('svg-delete')) {
      const id = e.target.closest('.svgs').dataset.id;
      todoManager.removeTodo(id);
      taskDiv.remove();
      console.log(todoManager.getAll());
    } else if (
      e.target.classList.contains('circle') ||
      e.target.classList.contains('circle-done')
    ) {
      const circle = e.target;
      const taskMain = e.target.closest('.task-main');
      taskDiv.classList.toggle('completed');

      circle.className === 'circle'
        ? (circle.className = 'circle-done')
        : (circle.className = 'circle');
      taskMain.classList.toggle('done');
    }
  });

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
    const toDo = todoManager.addTodo(
      input.value,
      dueDate.value,
      priority.value,
      id
    );

    const parsedDate = format(new Date(toDo.dueDate), 'MMM dd, yyyy');

    createTask(toDo.title, toDo.uniqueId, parsedDate, toDo.priority);
    dueDate.value = '';
  });

  function createTask(title, id, dueDate, priority) {
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

    const selectContainer = document.createElement('div');
    selectContainer.classList.add('date-prio-container');
    const dateDiv = document.createElement('div');
    dateDiv.textContent = dueDate;

    const priorityDiv = document.createElement('div');
    priorityDiv.textContent = priority;
    priorityDiv.className =
      priority === 'High priority' ? 'high-prio' : 'low-prio';

    let svgs = createSvgs(id);

    selectContainer.append(dateDiv, priorityDiv);
    taskMain.append(circle, taskName, selectContainer);
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
