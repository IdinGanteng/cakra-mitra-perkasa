const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("open", !isOpen);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Smoothly mark the current section in the navigation.
const sections = document.querySelectorAll("main section[id], main section:not([id])");
const navLinks = document.querySelectorAll('.nav a[href^="#"]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    if (!id) return;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  });
}, { rootMargin: "-35% 0px -55% 0px" });

document.querySelectorAll("#beranda, #tentang, #layanan, #proyek, #kontak").forEach((section) => {
  observer.observe(section);
});
