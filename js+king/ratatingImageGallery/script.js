const imageContainerEl = document.getElementById(".img-container");

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0;
let timer;

prevEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});

nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x})`;
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 1000);
}

updateGallery();

// below code was not working

// const imageContainerEl = document.querySelector(".image-container");

// const prevEl = document.getElementById("prev");
// const nextEl = document.getElementById("next");

// let x = 0;

// prevEl.addEventListener("click", () => {
//   x = x + 45;
//   updateGallery();
// });

// nextEl.addEventListener("click", () => {
//   x = x - 45;
//   updateGallery();
// });

// function updateGallery() {
//   imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
//   setTimeout(() => {
//     x = x - 45;
//     updateGallery();
//   }, 3000);
// }

// updateGallery();
