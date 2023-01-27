const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemp(event) {
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "celsius":
      kelvinEl.value = currentValue + 273.32;
      fahrenheitEl.value = currentValue * 1.8 + 32;
      break;

    case "fahrenheit":
      celsiusEl.value = (currentValue - 32) / 1.8;
      kelvinEl.value = (currentValue - 32) / 1.8 + 273.32;
      break;

    case "kelvin":
      celsiusEl.value = currentValue + 273.32;
      fahrenheitEl.value = (currentValue - 273.32) * 1.8 + 32;
      break;

    default:
      break;
  }
}

// console.log(event);
// console.log(event.target);
// console.log(event.target.name);
// console.log(event.target.value);
