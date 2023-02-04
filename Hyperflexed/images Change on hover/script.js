const images = document.getElementsByClassName("image");

let globalIndex = 0,
  last = { x: 0, y: 0 };

const activate = (image, x, y) => {
  image.style.left = `${x}px`;
  image.style.top = `${y}px`;

  image.dataset.status = "active";

  last = { x, y };
};

const distanceFromLast = (x, y) => {
  return Math.hypot(x - last.x, y - last.y);
};

window.onmousemove = (e) => {
  if (distanceFromLast(e.clientX, e.clientY) > 100) {
    const lead = images[globalIndex % images.length],
      tail = images[(globalIndex - 5) % images.length];
    //   const lead = images[globalIndex];

    activate(lead, e.clientX, e.clientY);
    if (tail) tail.dataset.status = "inactive";

    globalIndex++;
  }
};
