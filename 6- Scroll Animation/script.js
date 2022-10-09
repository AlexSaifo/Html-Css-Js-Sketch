const innerBoxes = document.querySelectorAll(".innerbox");

showboxs();

window.addEventListener("scroll", showboxs);

function showboxs() {
  const staticHeight = window.innerHeight;
  innerBoxes.forEach((box) => {
    const check = box.getBoundingClientRect().top;
    if (check < staticHeight - 10) box.classList.add("shown");
    else box.classList.remove("shown");
  });
}
