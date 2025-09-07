// Menu hambúrguer toggle
const menuHamburguer = document.getElementById('menu-hamburguer');
const menu = document.getElementById('menu');
menuHamburguer.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Funções para gerar conteúdo dos arquivos para download (strings)
function getIndexHtml() {
    return `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Projeto Indústria 4.0 - Dashboard Integrado</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <nav>
      <div class="menu-hamburguer" id="menu-hamburguer">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul class="menu" id="menu">
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#alertas">Alertas</a></li>
        <li><a href="#relatorios">Relatórios</a></li>
        <li><a href="#configuracoes">Configurações</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="dashboard">
      <h1>Dashboard em Tempo Real</h1>
      <p>Visualize dados da linha de produção em tempo real.</p>
    </section>

    <section id="alertas">
      <h1>Alertas e Notificações</h1>
      <p>Visualize alertas e configure notificações automáticas.</p>
    </section>

    <section id="relatorios">
      <h1>Relatórios</h1>
      <p>Geração de relatórios históricos e exportação.</p>
    </section>

    <section id="configuracoes">
      <h1>Configurações</h1>
      <p>Parâmetros de conexão e preferências do sistema.</p>
    </section>

    <section id="download">
      <h2>Baixar Arquivos do Projeto</h2>
      <button onclick="downloadFile('index.html', getIndexHtml())">Download index.html</button>
      <button onclick="downloadFile('style.css', getStyleCss())">Download style.css</button>
      <button onclick="downloadFile('main.js', getMainJs())">Download main.js</button>
    </section>
  </main>

  <script src="main.js"></script>
</body>
</html>
`;
}

function getStyleCss() {
    return `/* Reset básico e estilo body */
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f3f3f3;
    color: #333;
}

/* Header e menu */
header {
    background-color: #005592;
    color: white;
    position: sticky;
    top: 0;
    z-index: 100;
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
}

/* menu hamburguer */
.menu-hamburguer {
    cursor: pointer;
    display: none;
    flex-direction: column;
    gap: 5px;
}

.menu-hamburguer div {
    width: 25px;
    height: 3px;
    background-color: white;
}

/* menu principal */
.menu {
    list-style: none;
    margin: 0;
    display: flex;
    gap: 20px;
}

.menu li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

/* Responsividade */
@media (max-width: 768px) {
    .menu-hamburguer {
        display: flex;
    }
    .menu {
        position: absolute;
        top: 50px;
        right: 0;
        background-color: #005592;
        flex-direction: column;
        width: 200px;
        display: none;
    }
    .menu.show {
        display: flex;
    }
    .menu li {
        padding: 15px 20px;
    }
}

/* Conteúdo principal */
main {
    padding: 20px;
}

section {
    margin-bottom: 40px;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

button {
    margin: 5px;
    padding: 10px 15px;
    border: none;
    background-color: #005592;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #003f73;
}
`;
}

function getMainJs() {
    return `// Menu hambúrguer toggle
const menuHamburguer = document.getElementById('menu-hamburguer');
const menu = document.getElementById('menu');
menuHamburguer.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Funções para gerar conteúdo dos arquivos para download (strings)
function getIndexHtml() {
    // ...mesmo conteúdo da função no index...
}

function getStyleCss() {
    // ...mesmo conteúdo da função style...
}

function getMainJs() {
    // Esta função retorna o conteúdo do arquivo main.js, cuidado para não gerar recursão infinita.
    // Aqui colocamos uma string simples para o próprio arquivo, omitido para não gerar confusão.
    return \`// Código principal do projeto em JavaScript\n// Editar conforme necessário para funcionalidades adicionais.\`;
}

// Função download que cria e clica em link para baixar arquivo
function downloadFile(filename, content) {
    const blob = new Blob([content], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}
`;
}
