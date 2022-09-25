// ketika melakukan scrolling, beri background pada navigation
const navbar = document.querySelector(".navigation");
const mybutton = document.getElementById("btn-back-to-top");
const modalParent = document.getElementById("modal-parent");
const modal = document.getElementById("modal-gas");

const countDownDay = document.getElementById("countDownDay");
const countDownHour = document.getElementById("countDownHour");
const countDownMinute = document.getElementById("countDownMinute");
const countDownSecond = document.getElementById("countDownSecond");

const linkLomba = {
  podcast: {
    registrasi: "https://dicoba1",
    konfirmasi: "https://konfirmasi1",
  },
  web: {
    registrasi: "https://dicoba2",
    konfirmasi: "https://konfirmasi2",
  },
  fotografi: {
    registrasi: "https://dicoba3",
    konfirmasi: "https://konfirmasi3",
  },
  essai: {
    registrasi: "https://dicoba4",
    konfirmasi: "https://konfirmasi4",
  },
  poster: {
    registrasi: "https://dicoba5",
    konfirmasi: "https://konfirmasi5",
  },
};

window.onscroll = function () {
  scrollFunction();
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add("navbar-scrolling");
  } else {
    navbar.classList.remove("navbar-scrolling");
  }
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.setProperty("display", "block", "important");
  } else {
    mybutton.style.setProperty("display", "none", "important");
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// init Swiper:
const swiper = new Swiper(".swiper", {
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
  // autoplay: {
  // 	delay: 3000,
  // 	disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// navigation for mobile
let hamburgerMenu = document.querySelector("#hamburger");
let navigationMenu = document.querySelector("#navigation-menu");
let navigationMenuBg = navigationMenu.querySelector("ul");

// hamburger-line
const hamburgerLine1 = hamburgerMenu.querySelector("span:nth-child(1)");
const hamburgerLine2 = hamburgerMenu.querySelector("span:nth-child(2)");
const hamburgerLine3 = hamburgerMenu.querySelector("span:nth-child(3)");

hamburgerMenu.addEventListener("click", function () {
  setTimeout(() => {
    hamburgerLine1.classList.add("hamburger-line-1");
    hamburgerLine2.classList.add("hamburger-line-2");
    hamburgerLine3.classList.add("hamburger-line-3");
  }, 50);

  navigationMenu.classList.toggle("hidden");
  navigationMenu.classList.toggle("flex");
  setTimeout(() => {
    navigationMenu.classList.toggle("opacity-100");
    // setTimeout(() => {
    //   navigationMenuBg.classList.toggle("opacity-100");
    // }, 50);
  }, 100);
});

const countDownDate = new Date("Nov 12, 2022 00:00:00").getTime();
const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countDownDay.innerHTML = ("0" + days).slice(-2);
  countDownHour.innerHTML = ("0" + hours).slice(-2);
  countDownMinute.innerHTML = ("0" + minutes).slice(-2);
  countDownSecond.innerHTML = ("0" + seconds).slice(-2);

  if (distance < 0) {
    clearInterval(x);
    countDownDay.innerHTML = "00";
    countDownHour.innerHTML = "00";
    countDownMinute.innerHTML = "00";
    countDownSecond.innerHTML = "00";
  }
}, 1000);

document.getElementById("backdrop").addEventListener("click", () => {
  modal.classList.toggle("opacity-100");
  setTimeout(() => {
    modal.classList.toggle("hidden");
  }, 300);
});

function daftarLomba(lomba) {
  event.preventDefault();

  console.log(linkLomba[lomba]);
  document
    .getElementById("btnRegistrasi")
    .setAttribute("href", linkLomba[lomba]["registrasi"]);
  document
    .getElementById("btnKonfirmasi")
    .setAttribute("href", linkLomba[lomba]["konfirmasi"]);
  modal.classList.toggle("hidden");
  setTimeout(() => {
    modal.classList.toggle("opacity-100");
  }, 100);
}
