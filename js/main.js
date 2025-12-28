document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar a");

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

    try {
      const res = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!res.ok) throw new Error();

      response.textContent = "Mensagem enviada com sucesso!";
      contactForm.reset();
    } catch {
      response.textContent = "Erro ao enviar a mensagem.";
    }
  });
});

function changeLanguage(lang) {
  if (lang === "en") {
    window.location.href = "index.html";
  } else if (lang === "pt") {
    window.location.href = "index-pt.html";
  } else if (lang === "es") {
    window.location.href = "index-es.html";
  }
}
