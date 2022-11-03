const body = document.body;
const botaoDarkMode = document.querySelector('[data-botao-darkMode]');
const app = document.querySelector('[data-app]');
const botaoForm = document.querySelector('[data-botao-form]');
const listaItem = document.querySelector('[data-lista-item]');
const botaoConcluir = document.querySelector('[data-botao-concluir]');
const botaoExcluir = document.querySelector('[data-botao-excluir]');
const rodape = document.querySelector('[data-rodape]');

function darkMode() {
    body.classList.toggle("darkMode");
    app.classList.toggle("darkMode__app");
    botaoForm.classList.toggle("darkMode__botao-form");
    listaItem.classList.toggle("darkMode__lista-item");
    botaoConcluir.classList.toggle("darkMode__lista-botao");
    botaoExcluir.classList.toggle("darkMode__lista-botao");
    rodape.classList.toggle("darkMode__rodape");
}; 


botaoDarkMode.addEventListener("click", darkMode);

/*DEIXAR O CODIGO MAIS FLUIDO E MUDAR A APRARENCIA DO BOTAO*/
// FAZER TB A MANIPULACAO DO DOM PARA INSERIR ITENS NA LISTA
