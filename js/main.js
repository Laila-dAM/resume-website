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

  if (contactForm && response) {
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

        response.textContent = "Message sent successfully!";
        contactForm.reset();
      } catch {
        response.textContent = "Error sending message.";
      }
    });
  }

  const videos = [
    "anim1.mp4","anim2.mp4","anim3.mp4","anim4.mp4","anim5.mp4",
    "anim6.mp4","anim7.mp4","anim8.mp4","anim9.mp4","anim10.mp4",
    "anim11.mp4","anim12.mp4","anim13.mp4","anim14.mp4",
    "anim16.mp4","anim17.mp4","anim18.mp4","anim19.mp4","anim20.mp4",
    "anim21.mp4","anim22.mp4","anim23.mp4","anim24.mp4","anim25.mp4",
    "anim26.mp4","anim27.mp4","anim28.mp4","anim29.mp4","anim30.mp4",
    "anim31.mp4","anim32.mp4","anim33.mp4","anim34.mp4","anim35.mp4",
    "anim36.mp4","anim37.mp4","anim38.mp4","anim39.mp4","anim40.mp4",
    "anim41.mp4","anim42.mp4","anim43.mp4","anim44.mp4","anim45.mp4",
    "anim46.mp4","anim47.mp4","anim48.mp4","anim49.mp4","anim50.mp4",
    "anim51.mp4","anim52.mp4","anim53.mp4","anim54.mp4","anim55.mp4",
    "anim56.mp4","anim57.mp4","anim58.mp4","anim59.mp4","anim60.mp4"
  ];

  const track = document.getElementById("carouselTrack");

  if (track) {
    const loadVideos = () => {
      videos.forEach(name => {
        const video = document.createElement("video");
        video.src = `Arts/mp4/${name}`;
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        track.appendChild(video);
      });
    };

    loadVideos();
    loadVideos();
  }
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
