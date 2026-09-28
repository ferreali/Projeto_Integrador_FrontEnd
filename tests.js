// Testes simples executáveis no console do navegador.
// Para executar: abra index.html, F12 > Console.

function somar(a, b) {
  return a + b;
}

function validarSenha(senha) {
  return typeof senha === "string" && senha.length >= 6;
}

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

console.assert(somar(2, 3) === 5, "Teste 1: soma falhou.");
console.assert(validarSenha("123456") === true, "Teste 2: senha válida falhou.");
console.assert(validarSenha("123") === false, "Teste 3: senha inválida falhou.");
console.assert(validarEmail("aluno@email.com") === true, "Teste 4: e-mail válido falhou.");
console.assert(validarEmail("email-invalido") === false, "Teste 5: e-mail inválido falhou.");

console.log("Testes manuais concluídos.");
