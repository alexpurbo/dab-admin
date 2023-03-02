// HAmburger - Toggle Sidebar
const main = document.querySelector("#main-data");
const hamburger = document.querySelector("#hamburger");
const sidebar = document.querySelector("#sidebar-admin");
const header = document.querySelector("#header-admin");
const sidebarCloseBtn = document.querySelector("#btn-close-sidebar");
const compressSidebar = document.querySelector("#btn-compress-seidebar");
const navUser = document.querySelector("#nav-user");
const navUserDtl = document.querySelector("#nav-user-detail");
const navUserId = document.querySelector("#nav-user-id");
const navUserImg = document.querySelector("#nav-user-img");
// const navMenu = document.querySelector("#nav-menu");

// compressSidebar.addEventListener("click", function () {
//   sidebar.classList.toggle("max-w-64");
//   sidebar.classList.toggle("max-w-6");
// });

hamburger.addEventListener("click", function () {
  hamburger.classList.add("md:hidden");
  sidebar.classList.add("md:translate-x-0");
  sidebar.classList.add("md:ml-4");
  sidebar.classList.add("translate-x-0");
  main.classList.add("md:w-[calc(100%_-_300px)]");
  main.classList.add("md:left-72");
  header.classList.add("md:mx-0");
});

sidebarCloseBtn.addEventListener("click", function () {
  hamburger.classList.remove("md:hidden");
  sidebar.classList.remove("md:translate-x-0");
  sidebar.classList.remove("md:ml-4");
  sidebar.classList.remove("translate-x-0");
  main.classList.remove("md:w-[calc(100%_-_300px)]");
  main.classList.remove("md:left-72");
  header.classList.remove("md:mx-0");
});

navUser.addEventListener("click", function () {
  navUserDtl.classList.toggle("hidden");
});

window.addEventListener("click", function (e) {
  // console.log(e.target);
  if (e.target != navUserDtl && e.target != navUser && e.target != navUserId && e.target != navUserImg) {
    navUserDtl.classList.add("hidden");
  }
});

// window.addEventListener("click", function (e) {
//   if (e.target != navMenu && e.target != hamburger) {
//     hamburger.classList.remove("hamburger-active");
//     navMenu.classList.add("hidden");
//   }
// });
