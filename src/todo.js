export class ToDo {
  static counter = 0;
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    ToDo.counter++;
  }
}
