// show menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// show/hide cart
const cart = document.getElementById('cart');
const cartShop = document.getElementById('cart__shop');
const cartClose = document.getElementById('cart-close');

if (cartShop) {
  cartShop.addEventListener('click', () => {
    cart.classList.add('show-cart');
  });
}

if (cartClose) {
  cartClose.addEventListener('click', () => {
    cart.classList.remove('show-cart');
  });
}

// show/hide login
const login = document.getElementById('login');
const loginBtn = document.getElementById('login__button');
const loginClose = document.getElementById('login-close');

if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    login.classList.add('show-login');
  });
}

if (loginClose) {
  loginClose.addEventListener('click', () => {
    login.classList.remove('show-login');
  });
}

// Home swiper

var homeSwiper = new Swiper('.home-swiper', {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Scroll header

function scrollHeader() {
  const header = document.getElementById('header');

  if (this.scrollY > 50) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

// New swiper

var newSwiper = new Swiper('.new-swiper', {
  spaceBetween: 16,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
});

// scrollup
function scrollUp() {
  const scrollUpBtn = document.getElementById('scroll-up');
  if (this.scrollY > 350) scrollUpBtn.classList.add('show__scroll');
  else scrollUpBtn.classList.remove('show__scroll');
}

window.addEventListener('scroll', scrollUp);
