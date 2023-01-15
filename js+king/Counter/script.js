const counterEl = document.querySelectorAll(".counter");

counterEl.forEach((counterEl) => {
  counterEl.innerText = "0";
  // set values of counter to 0

  Counter();

  function Counter() {
    let currentNum = +counterEl.innerText;
    const dataCeil = counterEl.getAttribute("data-ceil");
    // console.log(dataCeil);
    const increment = dataCeil / 15;
    currentNum = Math.ceil(currentNum + increment);
    // currentNum += Math.ceil(increment);

    if (currentNum < dataCeil) {
      counterEl.innerText = currentNum;
      setTimeout(Counter, 50);
    } else {
      counterEl.innerText = dataCeil;
    }
  }
});
