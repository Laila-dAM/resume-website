document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar a");
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  const buttons = document.querySelectorAll(".lang-switcher button");
  const sections = document.querySelectorAll("[data-en][data-pt][data-es]");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      sections.forEach(sec => {
        sec.textContent = sec.dataset[lang];
      });
    });
  });

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Message sent! (Simulation)");
      contactForm.reset();
    });
  }
});
