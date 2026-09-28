// =========================================================
// CONSUMO DE API EXTERNA
// S17 - Integração com APIs
// =========================================================

const API_URL = "https://jsonplaceholder.typicode.com/posts/1";

async function carregarDadosAPI() {
  const title = document.querySelector("#apiTitle");
  const body = document.querySelector("#apiBody");
  const status = document.querySelector("#apiStatus");

  if (!title || !body || !status) return;

  title.textContent = "Carregando...";
  body.textContent = "Consultando a API...";
  status.textContent = "";

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();

    title.textContent = data.title;
    body.textContent = data.body;
    status.textContent = "Dados carregados com sucesso.";
    console.log("API consultada com sucesso.", data);
  } catch (error) {
    title.textContent = "Não foi possível carregar os dados";
    body.textContent = "Verifique sua conexão e tente novamente.";
    status.textContent = `Erro: ${error.message}`;
    console.error("Falha na API:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  carregarDadosAPI();

  const reloadButton = document.querySelector("#reloadApi");

  if (reloadButton) {
    reloadButton.addEventListener("click", carregarDadosAPI);
  }
});
