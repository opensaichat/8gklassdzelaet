// scroll animation
const elements = document.querySelectorAll(".animate");

function showOnScroll() {
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

// theme
function toggleTheme() {
  document.body.classList.toggle("dark");
}
