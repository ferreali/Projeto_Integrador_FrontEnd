// =========================================================
// AUTENTICAÇÃO SIMULADA
// S21 - Serviços de autenticação
// =========================================================
// IMPORTANTE: este exemplo é exclusivamente educacional.
// Não armazene senhas em localStorage em aplicações reais.

const STORAGE_USER = "portal_user";
const STORAGE_SESSION = "portal_session";

function getUser() {
  const raw = localStorage.getItem(STORAGE_USER);
  return raw ? JSON.parse(raw) : null;
}

function saveUser(user) {
  localStorage.setItem(STORAGE_USER, JSON.stringify(user));
}

function setSession(user) {
  localStorage.setItem(
    STORAGE_SESSION,
    JSON.stringify({
      email: user.email,
      loginAt: new Date().toISOString()
    })
  );
}

function getSession() {
  const raw = localStorage.getItem(STORAGE_SESSION);
  return raw ? JSON.parse(raw) : null;
}

function logout() {
  localStorage.removeItem(STORAGE_SESSION);
  console.log("Evento: logout realizado.");
  window.location.href = "login.html";
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showMessage(element, message, type = "error") {
  if (!element) return;
  element.textContent = message;
  element.className = `form-message ${type}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.querySelector("#registerForm");
  const loginForm = document.querySelector("#loginForm");
  const logoutButton = document.querySelector("#logoutButton");

  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.querySelector("#registerName").value.trim();
      const email = document.querySelector("#registerEmail").value.trim();
      const password = document.querySelector("#registerPassword").value;
      const confirm = document.querySelector("#registerConfirm").value;
      const message = document.querySelector("#registerMessage");

      if (!name || !email || !password || !confirm) {
        showMessage(message, "Preencha todos os campos.");
        return;
      }

      if (!validateEmail(email)) {
        showMessage(message, "Informe um e-mail válido.");
        return;
      }

      if (password.length < 6) {
        showMessage(message, "A senha deve possuir pelo menos 6 caracteres.");
        return;
      }

      if (password !== confirm) {
        showMessage(message, "As senhas não coincidem.");
        return;
      }

      saveUser({ name, email, password });
      showMessage(message, "Cadastro realizado! Redirecionando...", "success");

      console.log("Evento: novo cadastro realizado.");

      setTimeout(() => {
        window.location.href = "login.html";
      }, 800);
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = document.querySelector("#loginEmail").value.trim();
      const password = document.querySelector("#loginPassword").value;
      const message = document.querySelector("#loginMessage");
      const user = getUser();

      if (!user) {
        showMessage(message, "Nenhum usuário cadastrado neste navegador.");
        return;
      }

      if (email !== user.email || password !== user.password) {
        showMessage(message, "E-mail ou senha inválidos.");
        console.warn("Evento: tentativa de login inválida.");
        return;
      }

      setSession(user);
      showMessage(message, "Login realizado! Redirecionando...", "success");

      console.log("Evento: login realizado.");

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 500);
    });
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", logout);
  }
});
