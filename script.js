// Contact form demo
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Thanks for reaching out! I’ll get back to you soon.");
});

// Contact form demo
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Thanks for reaching out! I’ll get back to you soon.");
});

// 🌙 Light/Dark Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const icon = toggleBtn.querySelector("i");

// Load theme from localStorage
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  icon.classList.replace("bx-moon", "bx-sun");
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    icon.classList.replace("bx-moon", "bx-sun");
    localStorage.setItem("theme", "light");
  } else {
    icon.classList.replace("bx-sun", "bx-moon");
    localStorage.setItem("theme", "dark");
  }
});

