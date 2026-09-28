// =========================================================
// DASHBOARD E MONITORAMENTO
// S21
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  const user = getUser();
  const session = getSession();

  if (!user || !session) {
    window.location.href = "login.html";
    return;
  }

  const userName = document.querySelector("#userName");
  const userEmail = document.querySelector("#userEmail");
  const accessCount = document.querySelector("#accessCount");
  const eventLog = document.querySelector("#eventLog");

  userName.textContent = user.name;
  userEmail.textContent = user.email;

  const currentCount = Number(sessionStorage.getItem("accessCount") || 0) + 1;
  sessionStorage.setItem("accessCount", currentCount);
  accessCount.textContent = currentCount;

  const events = [
    "Login validado.",
    "Dashboard carregado.",
    "Sessão monitorada.",
    "Acesso registrado no navegador."
  ];

  eventLog.innerHTML = events
    .map((event, index) => `<div class="event">${index + 1}. ${event}</div>`)
    .join("");

  console.log("Monitoramento: dashboard acessado.", {
    user: user.email,
    time: new Date().toISOString()
  });
});
