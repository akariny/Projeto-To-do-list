const body = document.body;
const botaoDarkMode = document.querySelector('#botao-darkMode');
const lua = document.querySelector('#lua');
const sol = document.querySelector('#sol');
const app = document.querySelector('#app');
let botaoConclui = document.querySelectorAll('[data-botao-concluir]');
let botaoExclui = document.querySelectorAll('[data-botao-excluir]');


function darkMode() {
    body.classList.toggle("darkMode");
    botaoDarkMode.classList.toggle("darkMode__botao-cabecalho");
    lua.classList.toggle("darkMode__lua");
    sol.classList.toggle("darkMode__sol");
    app.classList.toggle("darkMode__app");
    botaoForm.classList.toggle("darkMode__botao-form");
}; 

botaoDarkMode.addEventListener("click", darkMode);

/*AJUSTAR CORES DA LISTA*/
