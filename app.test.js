// Testes automatizados com Node.js.
// Execute: npm test

const assert = require("node:assert/strict");

function somar(a, b) {
  return a + b;
}

function validarSenha(senha) {
  return typeof senha === "string" && senha.length >= 6;
}

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

assert.equal(somar(2, 3), 5);
assert.equal(validarSenha("123456"), true);
assert.equal(validarSenha("123"), false);
assert.equal(validarEmail("aluno@email.com"), true);
assert.equal(validarEmail("email-invalido"), false);

console.log("✓ Todos os testes passaram.");
