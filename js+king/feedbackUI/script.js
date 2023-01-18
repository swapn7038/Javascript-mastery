const ratingsEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let selectRating = "";

ratingsEls.forEach((ratingsEl) => {
  ratingsEl.addEventListener("click", (event) => {
    // console.log(event.target.innerText || event.target.parentNode.innerText);
    removeActive();
    selectRating = event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectRating !== "") {
    containerEl.innerHTML = `
         <strong>Thank You </strong>
         <br>
         <br>
         <strong> Feedback : ${selectRating} </strong>
         <p> We'll use your feedback to improve our customer support. </p>
        `;
  }
});

function removeActive() {
  ratingsEls.forEach((ratingsEl) => {
    ratingsEl.classList.remove("active");
  });
}

//* console.log(event.target.innerText);
// this gives us text inside the container

//* console.log(event.target.innerText || event.target.parentNode.innerText);
// this line of code also gives output of innerText even if we click on image
