const menu = document.querySelector("#menu");

menu.addEventListener("click", function () {
  const navUl = document.querySelector("#nav-ul");
  navUl.classList.toggle("show-ul");
  menu.classList.toggle("active");
});

// hover freelancer work

const freelanceWork = document.querySelectorAll(".freelancer-work");

freelanceWork.forEach((work) => {
  work.addEventListener("mouseenter", function () {
    const imgContainer = work.querySelector(".img-container");
    imgContainer.classList.add("bg-hover");
  });

  work.addEventListener("mouseleave", function () {
    const imgContainer = work.querySelector(".img-container");
    imgContainer.classList.remove("bg-hover");
    imgContainer.classList.remove("bg-click");
  });

  work.addEventListener("mousedown", function () {
    const imgContainer = work.querySelector(".img-container");
    imgContainer.classList.add("bg-click");
    console.log(imgContainer);
  });
});

// quote generator
