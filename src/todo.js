export class toDo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  get fullTitle() {
    return this.title;
  }

  set fullTitle(title) {
    this.title = title;
  }
}
