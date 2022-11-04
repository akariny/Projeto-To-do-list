const input = document.querySelector('[data-input]');
const botaoForm = document.querySelector('[data-botao-form]');

const lista = document.querySelector('[data-lista]')
const listaItem = document.querySelector('[data-lista-item]');

function criarTarefa(evento) {
    evento.preventDefault();

    //TODO: CRIANDO ELEMENTOS HTML 
    const tarefa = {
        valor: input.value,
        id: criarIdTarefa()
    }

    const li = document.createElement('li'); 
    li.classList.add('lista__item'); 

    const p = document.createElement('p');
    p.classList.add('lista__texto');
    p.setAttribute('id', tarefa.id);

    const conteudo = tarefa.valor;
    p.innerHTML = conteudo;

    const div = document.createElement('div');
    div.classList.add('lista__botoes');

    const botaoConcluir = document.createElement('button');
    botaoConcluir.classList.add('lista__botao');
    botaoConcluir.innerHTML = 'concluir';

    const botaoExcluir = document.createElement('button');
    botaoExcluir.classList.add('lista__botao');
    botaoExcluir.innerHTML = 'excluir';

    lista.appendChild(li);
    li.appendChild(p);
    li.appendChild(div);
    div.appendChild(botaoConcluir);
    div.appendChild(botaoExcluir);

    input.value = "";
    
    //açoes dos botoes da lista
    botaoConcluir.addEventListener('click', function(){
        const listaTexto = document.getElementById(tarefa.id);
        listaTexto.classList.toggle('concluido');
    });

    botaoExcluir.addEventListener('click', function(){
        const deleta = div.parentElement;
        deleta.remove();
    })
}

function criarIdTarefa() {
    return Math.floor(Math.random() * 5000);
}

botaoForm.addEventListener('click', criarTarefa);