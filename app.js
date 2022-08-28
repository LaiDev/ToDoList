import { CreateToDoItem } from "./scripts/createToDo.js";
import { create } from "./scripts/DOM.js";

let form = document.querySelector(".form");
let button = document.querySelector(".createButton");
let nameField = document.querySelector("#taskName");
let myARray = [];
let removeBtn = document.querySelector(".removeBtn");

function test() {
  let nameText = nameField.value;
  let newItem = new CreateToDoItem(nameText, "Test");
  create(newItem.name, newItem.dueDate);
}

button.addEventListener("click", test);

//Get Data from the form input

//Create a new to do item from captured data

//Render the data on a webpage
create("RED", "Orange");
create("RED", "Orange");

removeBtn.addEventListener("click", function () {});
