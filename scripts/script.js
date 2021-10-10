const buttonHighway = document.querySelector(".bicycle__button-highway");
const buttonGrevel = document.querySelector(".bicycle__button-grevel");
const buttonTt = document.querySelector(".bicycle__button-tt");
const switchButtonFooter = document.querySelector(".footer__switch-button");
const select = document.querySelector(".bicycle__buttons-mobile");
const switchButtonHeader = document.querySelector(".header__switch-button");
const input = document.querySelector(".footer__input");
const inputButton = document.querySelector(".footer__input-button");
const closeMenuButton = document.querySelector(".header__close");
const mobileHeaderButton = document.querySelector(".header__button_mobile");

const swiper = new Swiper(".bicycles__slider");
const swiperBicycleMobile = new Swiper(".bicycles__slider-mobile");

new Swiper(".slider__container", {
  navigation: {
    nextEl: ".slider__button-next",
    prevEl: ".slider__button-prev",
  },

  loop: true,
});

new Swiper(".slider__container_mobile", {
  navigation: {
    nextEl: ".slider__button-next_mobile",
    prevEl: ".slider__button-prev_mobile",
  },

  loop: true,
});

const swiperInHighway = new Swiper(".slider-highway", {
  pagination: {
    el: ".slider__pagination-highway",
    clickable: true,
  },
});

const swiperInGrevel = new Swiper(".slider-grevel", {
  pagination: {
    el: ".slider__pagination-grevel",
    clickable: true,
  },
});

const swiperInTt = new Swiper(".slider-tt", {
  pagination: {
    el: ".slider__pagination-tt",
    clickable: true,
  },
});

function closeMenu() {
  document.querySelector(".header_menu").classList.remove("header_menu-on");
  document
    .querySelector(".header_mobile")
    .classList.remove("header_mobile-off");
  document.body.style.position = "";
}

function openMenu() {
  document.querySelector(".header_mobile").classList.add("header_mobile-off");
  document.querySelector(".header_menu").classList.add("header_menu-on");
  document.body.style.position = "fixed";
}

function dark() {
  try {
    if (localStorage.getItem("theme") === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  } catch (err) {}
}

dark();

function darkSwitch(e) {
  e.preventDefault();
  if (localStorage.getItem("theme") === "dark") {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", "dark");
  }
  dark();
}

switchButtonFooter.addEventListener("click", function (e) {
  darkSwitch(e);
});

switchButtonHeader.addEventListener("click", function (e) {
  darkSwitch(e);
});

buttonHighway.addEventListener("click", function (e) {
  e.preventDefault();
  swiper.slideTo(0, 0);
});

buttonGrevel.addEventListener("click", function (e) {
  e.preventDefault();
  swiper.slideTo(1, 0);
});

buttonTt.addEventListener("click", function (e) {
  e.preventDefault();
  swiper.slideTo(2, 0);
});

select.addEventListener("change", function () {
  if (this.value == "highway") {
    swiperBicycleMobile.slideTo(0, 0);
  } else if (this.value == "grevel") {
    swiperBicycleMobile.slideTo(1, 0);
  } else if (this.value == "tt") {
    swiperBicycleMobile.slideTo(2, 0);
  }
});

buttonHighway.classList.add("bicycle__button-active");

buttonHighway.addEventListener("click", function () {
  buttonHighway.classList.add("bicycle__button-active");
  buttonGrevel.classList.remove("bicycle__button-active");
  buttonTt.classList.remove("bicycle__button-active");
});

buttonGrevel.addEventListener("click", function () {
  buttonGrevel.classList.add("bicycle__button-active");
  buttonHighway.classList.remove("bicycle__button-active");
  buttonTt.classList.remove("bicycle__button-active");
});

buttonTt.addEventListener("click", function () {
  buttonTt.classList.add("bicycle__button-active");
  buttonHighway.classList.remove("bicycle__button-active");
  buttonGrevel.classList.remove("bicycle__button-active");
});

input.addEventListener("click", function () {
  inputButton.classList.add("footer__input-button-on");
  input.removeAttribute("placeholder");
});

inputButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  input.value = "Круто!";
});

mobileHeaderButton.addEventListener("click", function () {
  openMenu();
});

closeMenuButton.addEventListener("click", function () {
  closeMenu();
});

document
  .querySelector(".header__ref_mobile-slider")
  .addEventListener("click", function () {
    closeMenu();
  });

document
  .querySelector(".header__ref_mobile-bicycle")
  .addEventListener("click", function () {
    closeMenu();
  });

document
  .querySelector(".header__ref_mobile-workout")
  .addEventListener("click", function () {
    closeMenu();
  });
