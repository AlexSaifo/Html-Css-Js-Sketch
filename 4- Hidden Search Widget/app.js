const SEARCH = document.querySelector(".search");
const BTN = document.querySelector(".btn");
const INPUT = document.querySelector(".input");
const btnCLOSE = document.querySelector(".fa-close");
const btnSearch = document.querySelector(".fa-search");

BTN.addEventListener("click", () => {
  SEARCH.classList.toggle("active");
  if(!!SEARCH.classList.contains("active"))
  {
    btnSearch.classList.add("typing");
    btnCLOSE.classList.remove("typing");
  }
  INPUT.focus();
  const exist = SEARCH.classList.contains('active');
  if(!exist)
  {
    btnCLOSE.classList.add('typing');
    btnSearch.classList.remove('typing');
  }
  
});

INPUT.addEventListener("input", () => {
  if (!!!INPUT.value) {
    btnSearch.classList.add("typing");
    btnCLOSE.classList.remove("typing");
  } else {
    btnCLOSE.classList.add("typing");
    btnSearch.classList.remove("typing");
  }
});
