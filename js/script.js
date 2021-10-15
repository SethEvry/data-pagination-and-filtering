/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const showPage = (list, page) => {
  const startIndex = page * 9 - 9;
  const endIndex = page * 9;
  const ul = document.querySelector(".student-list");
  ul.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      const student = list[i];
      const template = `
      <li class="student-item cf">
      <div class="student-details">
        <img class="avatar" src=${student.picture.medium} alt="Profile Picture">
        <h3>${student.name.first} ${student.name.last}</h3>
        <span class="email">${student.email}</span>
      </div>
      <div class="joined-details">
        <span class="date">Joined ${student.registered.date}</span>
      </div>
    </li> 
      `;
      ul.insertAdjacentHTML("beforeend", template);
    }
  }
};

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
const addPagination = (list) => {
  const pagesNeeded = Math.ceil(list.length / 9);
  const ul = document.querySelector(".link-list");
  ul.innerHTML = "";
  for (let i = 0; i < pagesNeeded; i++) {
    const li = `
      <li>
         <button type="button">${i + 1}</button>
      </li>
     `;
    ul.insertAdjacentHTML("beforeend", li);
    ul.querySelector("button").className = "active";
  }
  ul.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const button = e.target;
      const ul = button.parentNode.parentNode;
      const listItems = ul.children;
      for (let li of listItems) {
        li.firstElementChild.removeAttribute("class");
      }
      button.className = "active";
      showPage(list, parseInt(button.textContent));
    }
  });
};

// Call functions
showPage(data, 1);
addPagination(data);
