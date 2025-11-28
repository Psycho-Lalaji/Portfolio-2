/* =========================================
   SKILL BAR ANIMATION
========================================= */
const skillBars = document.querySelectorAll(".skill-bar");

function animateSkills() {
  skillBars.forEach(bar => {
    const percentage = bar.getAttribute("data-percent");
    const span = bar.querySelector("span");
    span.style.width = percentage + "%";
  });
}

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight - 120;

  skillBars.forEach(bar => {
    const position = bar.getBoundingClientRect().top;
    if (position < trigger) {
      animateSkills();
    }
  });
});


/* =========================================
   PROJECT CARDS CLICK (NO <a> TAG)
========================================= */
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const url = card.getAttribute("data-url");
    if (url) window.location.href = url;
  });
});


/* =========================================
   IMAGE SLIDER
========================================= */
let currentSlide = 0;

const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slides img");
const dotsContainer = document.querySelector(".dots");

// Create dots dynamically
if (dotsContainer) {
  slides.forEach((slide, index) => {
    const btn = document.createElement("button");
    if (index === 0) btn.classList.add("active");
    dotsContainer.appendChild(btn);

    btn.addEventListener("click", () => {
      currentSlide = index;
      updateSlider();
    });
  });
}

function updateSlider() {
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

  const dots = document.querySelectorAll(".dots button");
  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}

document.querySelector(".next")?.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
});

document.querySelector(".prev")?.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
});


/* =========================================
   DARK / LIGHT MODE TOGGLE
========================================= */
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    themeToggle.textContent = 
      document.body.classList.contains("dark")
      ? "☀ Light Mode"
      : "🌙 Dark Mode";
  });
}


/* =========================================
   BACK TO TOP BUTTON
========================================= */
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


/* =========================================
   CONTACT FORM VALIDATION + LOCALSTORAGE
========================================= */
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("formFeedback");

    if (!name || !email || !message) {
      feedback.textContent = "⚠ Please fill all fields!";
      feedback.style.color = "red";
      return;
    }

    // Save to localStorage
    localStorage.setItem("formName", name);
    localStorage.setItem("formEmail", email);
    localStorage.setItem("formMessage", message);

    feedback.textContent = "✔ Message submitted successfully!";
    feedback.style.color = "green";

    // Redirect to another page
    window.location.href = "form-details.html";
  });
}


/* =========================================
   CANVAS DRAWING (SIMPLE)
========================================= */
const canvas = document.getElementById("myCanvas");

if (canvas) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#222";
  ctx.fillRect(20, 20, 200, 100);
}
