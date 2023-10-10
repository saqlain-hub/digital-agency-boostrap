const menu = document.querySelector("#menu");

menu.addEventListener("click", function () {
  const ul = document.querySelector("#nav-links");
  ul.classList.toggle("show");
  menu.classList.toggle("active");
});
