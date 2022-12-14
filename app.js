import { CreateToDoItem } from "./scripts/createToDo.js";
import { create } from "./scripts/DOM.js";

let button = document.querySelector(".createButton");
button.addEventListener("click", renderInfo);

//renderInfo() gets the inputted value from the text field and stores it as nameText. A new variable called newItem stores a new CreateToDoItem which has the nameText as its arguments. create() is then called.

function renderInfo() {
  let nameText = document.querySelector("#taskName").value;
  let dateText = document.querySelector("#taskDueDate").value;
  let priorityText = document.querySelector("#taskPriority").value;
  let descriptionText = document.querySelector("#taskDescription").value;

  let newItem = new CreateToDoItem(
    nameText,
    dateText,
    priorityText,
    descriptionText
  );
  create(newItem.name, newItem.dueDate, newItem.priority, newItem.description);

  document.getElementById("form").reset();
  document.getElementById("form").style.visibility = "hidden";
}

create("Feed the Dog!", "2022-08-29", "Medium", "Give Delta her kibble");
create("Daily Coding", "2022-08-30", "High", "Work on The Odin Project");
create("Do Dishes", "2022-09-18", "Low", "");


