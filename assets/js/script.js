// ketika melakukan scrolling, beri background pada navigation
const navbar = document.querySelector(".navigation");

window.onscroll = function () {
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add("navbar-scrolling");
  } else {
    navbar.classList.remove("navbar-scrolling");
  }
};


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