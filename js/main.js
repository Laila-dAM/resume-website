document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const contactForm = document.getElementById("contact-form");
  const response = document.getElementById("form-response");

  if (!contactForm || !response) return;

  contactForm.addEventListener("submit", async event => {
    event.preventDefault();

    const data = {
      name: contactForm.name.value.trim(),
      email: contactForm.email.value.trim(),
      message: contactForm.message.value.trim()
    };

    if (!data.name || !data.email || !data.message) {
      response.textContent = "Please fill in all fields.";
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!res.ok) throw new Error();

      response.textContent = "Message sent successfully.";
      contactForm.reset();
    } catch {
      response.textContent = "Error sending message.";
    }
  });
});

function changeLanguage(lang) {
  const urls = {
    en: "index.html",
    pt: "index-pt.html",
    es: "index-es.html"
  };

  if (urls[lang]) {
    window.location.href = urls[lang];
  }
}
