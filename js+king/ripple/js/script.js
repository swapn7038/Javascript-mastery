const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pageY - btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");

  btnEl.addEventListener("click", () => {
    // body.style.backgroundColor = "black";
    // document.body.style.background = black;
  });
});

function changeBackground(color) {
  document.body.style.background = color;
}

btnEl.addEventListener("mouseover", function () {
  changeBackground("rgba(0, 0, 0, 0.2)");
  //   changeBackground("#AA0000");
  //   changeBackground("#");
});

// original code

// function changeBackground(color) {
//     document.body.style.background = color;
//  }

//  window.addEventListener("load",function() { changeBackground('red') });
