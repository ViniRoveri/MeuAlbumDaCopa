'use strict'

// CONFIGURAÇÃO DE NOMES E CLASSES

var selecao = document.querySelector('.selecao');
const cards = document.querySelectorAll('.card');
for(var i=0;i<cards.length;i++){
    var figurinha = cards[i];
    var classe = selecao.classList[1]+(i+1);
    figurinha.classList.add(classe);
    var texto = figurinha.querySelector('p');
    texto.textContent = classe;
}

// LISTA DE FIGURINHAS

const tenho = figurinhas()

// CHECAGEM

for(var i=0;i<tenho.length;i++){
    var nome = tenho[i]
    var checada = document.querySelector(`.${nome}`);
    if(checada){
        checada.classList.add('tenho');
    }
}

// CONTADOR DE CADA SELEÇÃO

var total = document.querySelectorAll('.tenho').length;
document.querySelector('.total-numero').textContent = total + '/'+ selecao.children.length

// COLOCA ALTURA NA BANDEIRA

const bandeira = document.querySelector('.bandeira');
const larguraBandeira = bandeira.clientWidth;
const alturaBandeira = larguraBandeira/1.5
bandeira.style.height = alturaBandeira+"px"

// DIZ QUAL É A BANDEIRA

var nomeSelecao = selecao.classList[1];
bandeira.style.backgroundImage = `url('../img/bandeiras/${nomeSelecao}.png')`;
