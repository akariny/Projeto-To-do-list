const body = document.body;
const botaoDarkMode = document.querySelector('[data-botao-darkMode]');
const lua = document.querySelector('[data-emoji-lua]');
const sol = document.querySelector('[data-emoji-sol]');
const app = document.querySelector('[data-app]');
const botaoForm = document.querySelector('[data-botao-form]');
const listaItem = document.querySelector('[data-lista-item]');
const botaoConcluir = document.querySelector('[data-botao-concluir]');
const botaoExcluir = document.querySelector('[data-botao-excluir]');

function darkMode() {
    body.classList.toggle("darkMode");
    botaoDarkMode.classList.toggle("darkMode__botao-cabecalho");
    lua.classList.toggle("darkMode__lua");
    sol.classList.toggle("darkMode__sol");
    app.classList.toggle("darkMode__app");
    botaoForm.classList.toggle("darkMode__botao-form");
    listaItem.classList.toggle("darkMode__lista-item");
    botaoConcluir.classList.toggle("darkMode__lista-botao");
    botaoExcluir.classList.toggle("darkMode__lista-botao");
}; 


botaoDarkMode.addEventListener("click", darkMode);
