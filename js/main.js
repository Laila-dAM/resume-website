document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar a");
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
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
  const response = document.getElementById("form-response");

  if (contactForm && response) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      response.textContent = "Message sent successfully! ✔";
      contactForm.reset();
    });
  }
});
