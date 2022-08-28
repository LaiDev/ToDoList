//Will create the to do cards as well as updating their text as new to do list items are created

let container = document.querySelector(".toDoCardsContainer");

export function create(itemTitle, itemDueDate, itemPriority, itemDescription) {
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("toDoCard");

  container.append(cardDiv);

  let title = document.createElement("p");
  title.innerHTML = itemTitle;
  cardDiv.append(title);
  let dueDate = document.createElement("p");
  dueDate.innerHTML = itemDueDate;
  cardDiv.append(dueDate);
  let priority = document.createElement("p");
  priority.innerHTML = itemPriority;
  cardDiv.append(priority);
  let description = document.createElement("p");
  description.innerHTML = itemDescription;
  cardDiv.append(description);
  let removeBtn = document.createElement("button");
  removeBtn.innerHTML = "Remove";
  removeBtn.classList.add("removeBtn");
  cardDiv.append(removeBtn);
}
