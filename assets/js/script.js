// ketika melakukan scrolling, beri background pada navigation
const navbar = document.querySelector(".navigation");

window.onscroll = function () {
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add("navbar-scrolling");
  } else {
    navbar.classList.remove("navbar-scrolling");
  }
};
