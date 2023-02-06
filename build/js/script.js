// HAmburger - Toggle Sidebar
const hamburger = document.querySelector("#hamburger");
const sidebar = document.querySelector("#sidebar-admin");
const header = document.querySelector("#header-admin");
// const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  sidebar.classList.toggle("-translate-x-full");
  sidebar.classList.toggle("translate-x-0");
  sidebar.classList.toggle("ml-4");
  header.classList.toggle("left-72");
  header.classList.toggle("w-[calc(100%_-_300px)]");
  //   navMenu.classList.toggle("hidden");
});
