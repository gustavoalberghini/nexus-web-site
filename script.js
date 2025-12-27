// Rolagem suave
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const section = document.querySelector(link.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Destaque do menu ativo
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ANIMAÇÃO DOS PLANOS AO APARECER
const planos = document.querySelectorAll(".plano");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.2
});

planos.forEach(plano => {
  plano.style.opacity = "0";
  plano.style.transform = "translateY(40px)";
  observer.observe(plano);
});
