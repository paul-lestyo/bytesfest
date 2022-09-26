// ketika melakukan scrolling, beri background pada navigation
const navbar = document.querySelector(".navigation");
const mybutton = document.getElementById("btn-back-to-top");
const modalSubmission = document.getElementById("modal-submission");
const modalDaftar = document.getElementById("modal-daftar");

const countDownDay = document.getElementById("countDownDay");
const countDownHour = document.getElementById("countDownHour");
const countDownMinute = document.getElementById("countDownMinute");
const countDownSecond = document.getElementById("countDownSecond");

const linkLomba = {
  podcast: {
    registrasi: "https://forms.gle/nxJc3fC9ChwnSYVb6",
    konfirmasi: "#",
  },
  web: {
    registrasi: "https://forms.gle/6HZK7UKkTgTcWwRp6",
    konfirmasi: "#",
  },
  fotografi: {
    registrasi: "https://forms.gle/EJEyD3wNmoWBoNYi9",
    konfirmasi: "#",
  },
  essai: {
    registrasi: "https://forms.gle/yZdr3mCWxVSEAA4K8",
    konfirmasi: "#",
  },
  poster: {
    registrasi: "https://forms.gle/BhoCbu73PPRbsN7j9",
    konfirmasi: "#",
  },
};

const linkSubmission = {
  batch1: "https://pengumpulan.link1",
  batch2: "https://pengumpulan.link2",
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
    navigationMenu.classList.toggle("opacity-0");
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

const closeModal = () => {
  console.log("tes modal");
  modalDaftar.classList.toggle("opacity-100");
  modalDaftar.classList.toggle("opacity-0");
  setTimeout(() => {
    modalDaftar.classList.toggle("hidden");
  }, 300);
};

document.getElementById("backdrop").addEventListener("click", closeModal);
document.getElementById("close-button").addEventListener("click", closeModal);

const closeModalSubmission = () => {
  console.log("tes modal sub");
  modalSubmission.classList.toggle("opacity-100");
  modalSubmission.classList.toggle("opacity-0");
  setTimeout(() => {
    modalSubmission.classList.toggle("hidden");
  }, 300);
};

document
  .getElementById("backdrop-submission")
  .addEventListener("click", closeModalSubmission);
document
  .getElementById("close-button-submission")
  .addEventListener("click", closeModalSubmission);

function daftarLomba(lomba) {
  event.preventDefault();

  console.log(linkLomba[lomba]);
  document
    .getElementById("btnRegistrasi")
    .setAttribute("href", linkLomba[lomba]["registrasi"]);
  document
    .getElementById("btnKonfirmasi")
    .setAttribute("href", linkLomba[lomba]["konfirmasi"]);
  modalDaftar.classList.toggle("hidden");
  setTimeout(() => {
    modalDaftar.classList.toggle("opacity-0");
    modalDaftar.classList.toggle("opacity-100");
  }, 100);
}

function submissionLomba() {
  event.preventDefault();
  document
    .getElementById("btnSubmissionBatch1")
    .setAttribute("href", linkSubmission.batch1);
  document
    .getElementById("btnSubmissionBatch2")
    .setAttribute("href", linkSubmission.batch2);
  modalSubmission.classList.toggle("hidden");
  setTimeout(() => {
    modalSubmission.classList.toggle("opacity-0");
    modalSubmission.classList.toggle("opacity-100");
  }, 100);
}

// SCRIPT DI BAWAH INI UNTUK LOAD ANIMATION START

// anime-js

// loading-animation-script

// loadingText = document.querySelector(".loading-value");
// loadingContainer = document.querySelector(".loading-container");
// loadingValue = {
//   progress: 0,
// };

// const loadingTimeline = anime.timeline({});

// anime({
//   targets: loadingValue,
//   progress: 100,
//   easing: "easeInQuad",
//   duration: 800, // loading-duration
//   round: 1,
//   update: () => {
//     loadingText.innerHTML = loadingValue.progress;
//     anime({
//       targets: ".loading-line",
//       width: loadingValue.progress + "%",
//       duration: 0,
//     });
//   },
//   complete: () => {
//     loadingContainer.classList.add("hidden");
//   },
// });

// const proudlyPresentContainer = document.querySelector(
//   ".proudly-present-container"
// );
// const proudlyPresentTitle = document.querySelector(".proudly-present-title");
// const proudlyPresentSubtitle = document.querySelector(
//   ".proudly-present-subtitle"
// );

// setTimeout(() => {
//   proudlyPresentContainer.classList.remove("opacity-0");
//   proudlyPresentContainer.classList.add("opacity-100");
// }, 900);

// // proudly-present-appear
// setTimeout(() => {
//   proudlyPresentTitle.classList.remove("opacity-0");
//   proudlyPresentTitle.classList.add("opacity-100");
// }, 900);
// setTimeout(() => {
//   proudlyPresentSubtitle.classList.remove("opacity-0");
//   proudlyPresentSubtitle.classList.add("opacity-100");
// }, 900);

// // proudly-present-disappear
// setTimeout(() => {
//   proudlyPresentTitle.classList.remove("opacity-100");
//   proudlyPresentTitle.classList.add("opacity-0");
// }, 2500);
// setTimeout(() => {
//   proudlyPresentSubtitle.classList.remove("opacity-100");
//   proudlyPresentSubtitle.classList.add("opacity-0");
// }, 2500);

// setTimeout(() => {
//   proudlyPresentContainer.classList.add("hidden");
// }, 3200);

// // bytefest-title-state
// const bytesfestStartContainer = document.querySelector(
//   ".bytesfest-start-container"
// );
// setTimeout(() => {
//   bytesfestStartContainer.classList.remove("opacity-0");
//   bytesfestStartContainer.classList.add("opacity-100");
// }, 3200);

// const backdropBg = document.querySelector(".backdrop-bg");

// setTimeout(() => {
//   backdropBg.classList.remove("hidden");
// }, 3200);
// setTimeout(() => {
//   backdropBg.classList.remove("backdrop-blur-xl");
//   backdropBg.classList.add("backdrop-blur-0");
// }, 3500);

// const startAnimationBg = document.querySelector(".start-animation-bg");
// const lightBg = document.querySelector(".light-bg");
// setTimeout(() => {
//   startAnimationBg.classList.add("hidden");
//   lightBg.classList.add("opacity-0");
// }, 5500);
