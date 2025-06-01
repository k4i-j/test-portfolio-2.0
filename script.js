// Fade-in section when scrolling
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});
sections.forEach(section => observer.observe(section));

// Scroll-to-top button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Auto-slide Carousel
const track = document.getElementById('carouselTrack');
let index = 0;
setInterval(() => {
  index++;
  if (index >= track.children.length) index = 0;
  track.style.transform = `translateX(-${index * 100}%)`;
}, 3000);

const track = document.getElementById("carouselTrack");
const slides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSlide = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
});

// Auto scroll every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}, 5000);

