// ketika melakukan scrolling, beri background pada navigation
const navbar = document.querySelector(".navigation");
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add("navbar-scrolling");
  } else {
    navbar.classList.remove("navbar-scrolling");
  }
};


function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.setProperty('display', 'block', 'important');
  } else {
    mybutton.style.setProperty('display', 'none', 'important');
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// init Swiper:
const swiper = new Swiper('.swiper', {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	spaceBetween: 100,
	loop: true,
	coverflowEffect: {
	  rotate: 0,
	  stretch: 0,
	  depth: 100,
	  modifier: 1,
	  slideShadows: false,
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
  });