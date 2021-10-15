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
      const li = document.createElement("li");
      li.className = "student-item cf";
      const div1 = document.createElement("div");
      div1.className = "student-details";
      const img = document.createElement("img");
      img.className = "avatar";
      img.src = student.picture.medium;
      const h3 = document.createElement("h3");
      h3.textContent = `${student.name.first} ${student.name.second}`;
      const span1 = document.createElement("span");
      span1.className = "email";
      span1.textContent = student.email;
      const div2 = document.createElement("div");
      div2.className = "joined-details";
      const span2 = document.createElement("span");
      span2.className = "date";
      span2.textContent = `Joined ${student.registered.date}`;
      li.appendChild(div1);
      li.appendChild(div2);
      div1.appendChild(img);
      div1.appendChild(h3);
      div1.appendChild(span1);
      div2.appendChild(span2);
      ul.appendChild(li);
    }
  }
};

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions
