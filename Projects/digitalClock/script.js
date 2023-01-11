const hourEl = document.getElementById("hour"),
  minuteEl = document.getElementById("minute"),
  secondEl = document.getElementById("second"),
  ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let ampm = "AM";

  if (h > 12) {
    //
    h -= 12;
    ampm = "PM";
  }

  //   h = h < 10 ;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;

  //   setTimeout
  // setInterval
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();

window.onload = function () {
  // Array of Images
  var backgroundImg = [
    "../digitalClock/assets/image-1.jpg",
    "../digitalClock/assets/image-2.jpg",
    "../digitalClock/assets/image-3.jpg",
    "../digitalClock/assets/image-4.jpg",
    "../digitalClock/assets/image-6.jpg",
    "../digitalClock/assets/image-7.jpg",
  ];

  setInterval(changeImage, 3000);
  function changeImage() {
    var i = Math.floor(Math.random() * 7);

    document.body.style.backgroundImage = "url('" + backgroundImg[i] + "')";
  }
};
