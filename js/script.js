const input = document.querySelector('#input');
const botaoForm = document.querySelector('#botao-form');

const lista = document.querySelector('#lista');
const listaItem = document.querySelector('.lista-item');

function criarTarefa(evento) {
    evento.preventDefault();

    if(input.value == "") {
        return
    };
    
    //TODO: CRIANDO ELEMENTOS HTML DA LISTA 
    const tarefa = {
        valor: input.value,
        id: criarIdTarefa()
    }

    const li = document.createElement('li'); 
    li.classList.add('lista__item');
    li.setAttribute('data-lista-item', '');

    const p = document.createElement('p');
    p.classList.add('lista__texto');
    p.setAttribute('id', tarefa.id);

    const conteudo = tarefa.valor;
    p.innerHTML = conteudo;

    const div = document.createElement('div');
    div.classList.add('lista__botoes');

    const botaoConcluir = document.createElement('button');
    botaoConcluir.classList.add('lista__botao');
    botaoConcluir.setAttribute('data-botao-concluir', '');
    botaoConcluir.innerHTML = 'concluir';

    const botaoExcluir = document.createElement('button');
    botaoExcluir.classList.add('lista__botao');
    botaoExcluir.setAttribute('data-botao-excluir', '');
    botaoExcluir.innerHTML = 'excluir';

    lista.appendChild(li);
    li.appendChild(p);
    li.appendChild(div);
    div.appendChild(botaoConcluir);
    div.appendChild(botaoExcluir);

    input.value = "";
    
    //TODO: açoes dos botoes da lista
    botaoConcluir.addEventListener('click', function(){
        const listaTexto = document.getElementById(tarefa.id);
        listaTexto.classList.toggle('concluido');
    });

    botaoExcluir.addEventListener('click', function(){
        const deleta = div.parentElement;
        deleta.remove();
    });

}

function criarIdTarefa() {
    return Math.floor(Math.random() * 5000);
}

botaoForm.addEventListener('click', criarTarefa);