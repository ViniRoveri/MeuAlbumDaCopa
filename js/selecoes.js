'use strict'

// CONFIGURAÇÃO DE NOMES E CLASSES DAS FIGURINHAS

const selecao = document.querySelector('.selecao');
const sigla = selecao.classList[1];
const cards = document.querySelectorAll('.card');

for(var i=0;i<cards.length;i++){
    var figurinha = cards[i];
    var classe = sigla+(i+1);
    figurinha.classList.add(classe);
    figurinha.querySelector('p').textContent = classe;
}

// ARRAY DE FIGURINHAS DO PAÍS

const tenho = figurinhas();

// DEIXA AS FIGURINHAS VERDES

for(var i=0;i<tenho.length;i++){
    document.querySelector(`.${tenho[i]}`).classList.add('tenho');
}

// CONTADOR DA SELEÇÃO

document.querySelector('.total-numero').textContent = tenho.length + '/'+ selecao.children.length

// COLOCA ALTURA NA BANDEIRA (LARGURA ESTÁ NO CSS) & DIZ QUAL É A BANDEIRA

const bandeira = document.querySelector('.bandeira');
if(bandeira){
    const larguraBandeira = bandeira.clientWidth;
    bandeira.style.height = larguraBandeira/1.5+"px"

    bandeira.style.backgroundImage = `url('../img/bandeiras/${sigla}.png')`;
}
