import { CreateToDoItem } from "./scripts/createToDo.js";
import { create } from "./scripts/DOM.js";

let form = document.querySelector(".form");
let button = document.querySelector(".createButton");
let nameField = document.querySelector("#taskName");
let myARray = [];
let removeBtn = document.querySelector(".removeBtn");

button.addEventListener("click", renderInfo);

//renderInfo() gets the inputted value from the text field and stores it as nameText. A new variable called newItem stores a new CreateToDoItem which has the nameText as its arguments. create() is then called.

function renderInfo() {
  let nameText = nameField.value;
  let newItem = new CreateToDoItem(nameText, "Test");
  create(newItem.name, newItem.dueDate);
}
