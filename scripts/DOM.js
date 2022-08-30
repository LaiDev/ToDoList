let myArray = [];
let name = "Your Name";
let WelcomeMessage = document.querySelector(".welcomeMessage");
WelcomeMessage.innerHTML = `Welcome, ${name}`;

const createTaskButton = document.querySelector(".addTaskButton");
const closeForm = document.querySelector(".closeForm");

closeForm.addEventListener("click", () => {
  document.querySelector("#form").style.visibility = "hidden";
  revertOpacity();
});

createTaskButton.addEventListener("click", function () {
  document.querySelector("#form").style.visibility = "visible";
  document.querySelector(".taskContainer").style.opacity = ".3";
});

let container = document.querySelector(".tasksGrid");

export function create(itemTitle, itemDueDate, itemPriority, itemDescription) {
  //Sets the website opacity back to its original value after the form closes
  revertOpacity();

  let cardDiv = document.createElement("div");
  cardDiv.classList.add("toDoCard");
  container.append(cardDiv);

  //div holding left and right
  let topCard = document.createElement("div");
  topCard.classList.add("topCardContainer");
  cardDiv.append(topCard);

  //Div containing the items on the right side of the top of the card
  let rightTop = document.createElement("div");
  rightTop.classList.add("topRight");
  topCard.append(rightTop);

  //Div containing the items on the left side of the top of the card
  let leftTop = document.createElement("div");
  leftTop.classList.add("topLeft");
  topCard.append(leftTop);

  let title = document.createElement("p");
  title.innerHTML = itemTitle;
  title.classList.add("cardTitle");
  leftTop.append(title);

  let dueDate = document.createElement("p");
  dueDate.innerHTML = itemDueDate;
  dueDate.classList.add("cardDueDate");
  rightTop.append(dueDate);

  let priority = document.createElement("p");
  priority.innerHTML = itemPriority;
  priority.classList.add("cardPriority");

  //Changes the task card colors based on their priority

  switch (priority.innerHTML) {
    case "Low":
      cardDiv.style.backgroundColor = "#deffbf";
      break;
    case "Medium":
      cardDiv.style.backgroundColor = "#ffffcc";
      break;
    case "High":
      cardDiv.style.backgroundColor = "#ffcccc";
      break;
  }

  let description = document.createElement("p");
  description.innerHTML = itemDescription;
  description.classList.add("cardDescription");
  cardDiv.append(description);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "X";
  deleteButton.classList.add("deleteCardButton");
  cardDiv.append(deleteButton);

  myArray.push(this);
  let totalTaskMessage = document.querySelector(".totalTaskMessage");
  totalTaskMessage.innerHTML = `Total Tasks: ${myArray.length}`;

  //Checks to see if the delete Button has been pressed. If so, delete the card that is selected.

  deleteButton.addEventListener("click", () => {
    cardDiv.remove();
  });
}

function revertOpacity() {
  document.querySelector(".taskContainer").style.opacity = "1";
}
