const left = document.getElementById("left-side");

const handleOnMove = (e) => {
  const per = (e.clientX / window.innerWidth) * 100;

  left.style.width = `${per}%`;
};

document.onmousemove = (e) => handleOnMove(e);
document.ontouchmove = (e) => handleOnMove(e.touches[0]);
