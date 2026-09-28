// =========================================================
// SCRIPT PRINCIPAL
// S15, S16, S19 e S20
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("#menuToggle");
  const mainNav = document.querySelector("#mainNav");
  const backToTop = document.querySelector("#backToTop");

  // Menu responsivo
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
      );
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
      });
    });
  }

  // Botão voltar ao topo
  window.addEventListener("scroll", () => {
    if (!backToTop) return;
    backToTop.classList.toggle("visible", window.scrollY > 500);
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      console.log("Evento: usuário voltou ao topo.");
    });
  }

  console.log("Portal+ carregado.");
});
