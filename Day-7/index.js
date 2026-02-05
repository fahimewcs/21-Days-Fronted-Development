const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
const navbar = document.querySelector(".navbar");

toggleBtn.addEventListener("click", () => {
  console.log("Sidebar toggle clicked!");
  sidebar.classList.toggle("active");
  navbar.classList.toggle("")
});


const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function nextSlide() {
  // Remove active class from current slide
  slides[currentSlide].classList.remove("active");

  // Move to next slide
  currentSlide = (currentSlide + 1) % slides.length;

  // Add active class to new slide
  slides[currentSlide].classList.add("active");
}


setInterval(nextSlide, 3000);

