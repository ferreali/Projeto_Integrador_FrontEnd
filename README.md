# Portal+ — Projeto Integrador S15 a S21

Projeto educacional de construção de um site completo para revisão de:

- S15 — Estilização e Performance
- S16 — Animações e Pré-processadores CSS
- S17 — Integração com APIs Externas
- S18 — CI/CD e Testes Automatizados
- S19 — CSS Avançado e Mobile-First
- S20 — Acessibilidade e Animações Interativas
- S21 — Autenticação e Monitoramento

## 1. Tecnologias

- HTML5
- CSS3
- Sass/SCSS
- JavaScript
- Fetch API
- JSON
- Node.js para execução dos testes
- Git/GitHub
- GitHub Actions

## 2. Como executar

### Opção A — VS Code + Live Server

1. Abra a pasta `portal-servicos` no VS Code.
2. Instale a extensão Live Server.
3. Clique com o botão direito em `index.html`.
4. Escolha `Open with Live Server`.

### Opção B — servidor local com Python

No terminal, dentro da pasta do projeto:

```bash
python -m http.server 5500
```

Depois abra:

```text
http://localhost:5500
```

## 3. Cadastro e login

1. Acesse `cadastro.html`.
2. Cadastre um usuário.
3. Volte para `login.html`.
4. Faça login.
5. O sistema abrirá o `dashboard.html`.

Os dados são armazenados em `localStorage` apenas para demonstração.

> Não utilize este mecanismo como autenticação de produção. Aplicações reais devem possuir backend, armazenamento seguro de credenciais, hashing de senhas e gerenciamento seguro de sessão.

## 4. API

A página inicial consulta:

```text
https://jsonplaceholder.typicode.com/posts/1
```

O JavaScript usa `fetch()` e trata erros com `try/catch`.

## 5. Testes

É necessário ter Node.js instalado.

Execute:

```bash
npm test
```

Também é possível executar:

```bash
npm run test:verbose
```

## 6. Teste no navegador

O arquivo `js/tests.js` possui exemplos de testes com `console.assert`.

Para utilizá-lo, adicione temporariamente:

```html
<script src="js/tests.js"></script>
```

Abra o navegador e pressione F12 para visualizar o Console.

## 7. SCSS

O arquivo:

```text
scss/style.scss
```

demonstra:

- Variáveis;
- Mixins;
- Nesting;
- Pseudo-classes.

Para compilar Sass, caso o aluno tenha o Sass instalado:

```bash
sass scss/style.scss css/style.css
```

> O CSS principal já está pronto para execução. A pasta SCSS serve como material de revisão e exercício de pré-processador.

## 8. CI/CD

O workflow:

```text
.github/workflows/ci.yml
```

executa os testes automaticamente quando o código é enviado ao GitHub.

Fluxo:

```text
Alteração do código
        ↓
      Git
        ↓
     GitHub
        ↓
 GitHub Actions
        ↓
   npm test
        ↓
 Resultado
```

## 9. Acessibilidade

O projeto inclui:

- HTML semântico;
- Skip link;
- Labels em formulários;
- `aria-label`;
- `aria-expanded`;
- `aria-live`;
- foco visível;
- navegação por teclado;
- `prefers-reduced-motion`;
- contraste visual;
- textos alternativos quando imagens forem utilizadas.

## 10. Performance

Foram utilizadas algumas práticas:

- CSS separado;
- JavaScript com `defer`;
- redução de código duplicado;
- uso de CSS responsivo;
- carregamento sob demanda de dados da API;
- estrutura simples de página.

## 11. Estrutura

```text
portal-servicos/
├── index.html
├── login.html
├── cadastro.html
├── dashboard.html
├── css/
│   ├── style.css
│   └── responsive.css
├── scss/
│   └── style.scss
├── js/
│   ├── script.js
│   ├── api.js
│   ├── auth.js
│   ├── dashboard.js
│   └── tests.js
├── tests/
│   └── app.test.js
├── .github/
│   └── workflows/
│       └── ci.yml
├── package.json
└── README.md
```

## 12. Desafios para os alunos

Depois de executar o projeto, tente:

1. Alterar as cores usando variáveis CSS.
2. Criar um novo serviço.
3. Trocar a API utilizada.
4. Criar uma nova página.
5. Adicionar validações ao cadastro.
6. Criar novos testes.
7. Criar um novo workflow.
8. Melhorar a acessibilidade.
9. Adicionar uma animação respeitando `prefers-reduced-motion`.
10. Criar uma nova seção responsiva.

## 13. Observação pedagógica

Este projeto é uma base de revisão. O objetivo é que o aluno compreenda como diferentes conteúdos estudados ao longo das semanas podem ser integrados em uma aplicação única.
