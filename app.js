import { CreateToDoItem } from "./scripts/createToDo.js";
import { create } from "./scripts/DOM.js";

let button = document.querySelector(".createButton");
let nameField = document.querySelector("#taskName");
let dateField = document.querySelector("#taskDueDate");
let priorityField = document.querySelector("#taskPriority");
let descriptionField = document.querySelector("#taskDescription");
let myARray = [];
let removeBtn = document.querySelector(".removeBtn");

button.addEventListener("click", renderInfo);

//renderInfo() gets the inputted value from the text field and stores it as nameText. A new variable called newItem stores a new CreateToDoItem which has the nameText as its arguments. create() is then called.

function renderInfo() {
  let nameText = nameField.value;
  let dateText = dateField.value;
  let priorityText = priorityField.value;
  let descriptionText = descriptionField.value;

  let newItem = new CreateToDoItem(
    nameText,
    dateText,
    priorityText,
    descriptionText
  );
  create(newItem.name, newItem.dueDate, newItem.priority, newItem.description);

  document.getElementById("form").reset();
}
