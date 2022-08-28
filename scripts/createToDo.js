import { create } from "./DOM.js";

//Will create a class that will contain the information each time you create a to do list

export class CreateToDoItem {
  constructor(name, dueDate, priority, description) {
    this.name = name;
    this.dueDate = dueDate;
    this.priority = priority;
    this.description = description;
  }
}
