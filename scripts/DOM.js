let myArray = [];
let name = "Aalaizha";
let WelcomeMessage = document.querySelector(".welcomeMessage");
WelcomeMessage.innerHTML = `Welcome, ${name}`;

const createTaskButton = document.querySelector(".addTaskButton");

createTaskButton.addEventListener("click", function () {
  document.querySelector("#form").style.visibility = "visible";
});

//Will create the to do cards as well as updating their text as new to do list items are created

let container = document.querySelector(".tasksGrid");

//Card div is a flex item. Top part is divided into two divs
console.log(myArray.length);

export function create(itemTitle, itemDueDate, itemPriority, itemDescription) {
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
 

  switch (priority.innerHTML) {
    case "Low":
      cardDiv.style.backgroundColor = '#deffbf'
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

  myArray.push(this);
  let totalTaskMessage = document.querySelector(".totalTaskMessage");
  totalTaskMessage.innerHTML = `Total Tasks: ${myArray.length}`;
}
