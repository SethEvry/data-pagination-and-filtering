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
  if (list.length > 0) {
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
  } else {
    const noResults = `<h1 class='no-results'>No results found!</h1>`;
    ul.insertAdjacentHTML("beforeend", noResults);
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

/*
Create addSearch function
This function will filter through profiles
*/

const addSearch = (list) => {
  const header = document.querySelector("header");
  const searchBar = `
   <label for="search" class="student-search">
      <span>Search by name</span>
      <input id="search" placeholder="Search by name...">
      <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>
   `;
  header.insertAdjacentHTML("beforeend", searchBar);
  const handleSearch = () => {
    const value = header.querySelector("input").value.toLowerCase();
    let newList = [];
    for (let student of list) {
      const name = `${student.name.first.toLowerCase()} ${student.name.last.toLowerCase()}`;
      if (name.includes(value)) {
        newList.push(student);
      }
    }
    showPage(newList, 1);
    addPagination(newList);
  };
  header.addEventListener("keyup", (e) => handleSearch());
  header.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" || e.target.tagName === "IMG") {
      handleSearch();
    }
  });
};

// Call functions
showPage(data, 1);
addPagination(data);
addSearch(data);
