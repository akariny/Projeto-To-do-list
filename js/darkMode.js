const body = document.body;
const botaoDarkMode = document.querySelector('[data-botao-darkMode]');
const lua = document.querySelector('[data-emoji-lua]');
const sol = document.querySelector('[data-emoji-sol]');
const app = document.querySelector('[data-app]');

const botaoConclui = document.querySelector('#concluir');
const botaoExclui = document.querySelector('[data-botao-excluir]');


function darkMode() {
    body.classList.toggle("darkMode");
    botaoDarkMode.classList.toggle("darkMode__botao-cabecalho");
    lua.classList.toggle("darkMode__lua");
    sol.classList.toggle("darkMode__sol");
    app.classList.toggle("darkMode__app");
    botaoForm.classList.toggle("darkMode__botao-form");
    listaItem.classList.toggle("darkMode__lista-item"); //AQUI
    botaoConclui.classList.add.toggle("darkMode__lista-botao"); //AQUI
    botaoExclui.classList.toggle("darkMode__lista-botao"); //AQUI
}; 

botaoDarkMode.addEventListener("click", darkMode);

/*AJUSTAR CORES DA LISTA*/
