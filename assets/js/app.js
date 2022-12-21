// Home swiper

var homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Scroll header

function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY > 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

// New swiper

var newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 16,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
});
