const menu = document.querySelector("#menu");

menu.addEventListener("click", function () {
  const navUl = document.querySelector("#nav-ul");
  navUl.classList.toggle("show-ul");
  menu.classList.toggle("active");
});
