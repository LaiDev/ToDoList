let name = "Aalaizha";
let WelcomeMessage = document.querySelector(".welcomeMessage");
WelcomeMessage.innerHTML = `Welcome, ${name}`;

let tasks = document.querySelector(".tasksGrid");
console.log(tasks.length)

const createTaskButton = document.querySelector(".addTaskButton");

createTaskButton.addEventListener("click", function () {
  document.querySelector("#form").style.visibility = "visible";
});

//Will create the to do cards as well as updating their text as new to do list items are created

let container = document.querySelector(".tasksGrid");

export function create(itemTitle, itemDueDate, itemPriority, itemDescription) {
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("toDoCard");
  container.append(cardDiv);

  let title = document.createElement("p");
  title.innerHTML = itemTitle;
  title.classList.add("cardTitle");
  cardDiv.append(title);

  let dueDate = document.createElement("p");
  dueDate.innerHTML = itemDueDate;
  dueDate.classList.add("cardDueDate");
  cardDiv.append(dueDate);

  let priority = document.createElement("p");
  priority.innerHTML = itemPriority;
  priority.classList.add("cardPriority");
  cardDiv.append(priority);

  let description = document.createElement("p");
  description.innerHTML = itemDescription;
  description.classList.add("cardDescription");
  cardDiv.append(description);


}
