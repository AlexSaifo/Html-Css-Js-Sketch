const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  Update();
  let colore = getColor();
  document.body.style.backgroundColor = colore;
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  let colore = getColor();
  document.body.style.backgroundColor = colore;
  Update();
});

function Update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const Actives = document.querySelectorAll(".active");

  progress.style.width =
    ((Actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive == 1) prev.disabled = true;
  else if (currentActive == circles.length) next.disabled = true;
  else {
    prev.disabled = false;
    next.disabled = false;
  }
}

function getColor() {
  let a = parseInt(Math.random() * 256);
  let b = parseInt(Math.random() * 256);
  let c = parseInt(Math.random() * 256);
  let str = "rgb(" + a + "," + b + "," + c + ")";

  return str;
}
