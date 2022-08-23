'use strict'

// LISTA DE FIGURINHAS

const selecoes = {
    // !!!!! ADICIONAR AS FIGURINHAS AQUI !!!!!
    QAT: [4,8,16],
    ECU: [],
}

// INFORMA AS FIGURINHAS POR PAÍS

function adiciona(EXP){
    var pais = selecoes[EXP]
    var retorno = []
    for(i=0;i<pais.length;i++){
        var numero = pais[i]
        var figurinha = EXP + numero
        retorno.push(figurinha)
    }

    return retorno
}

// INFORMA TODAS AS FIGURINHAS

function figurinhas(){
    var todas = []

    var selecoes = document.querySelectorAll('.selecao');
    for(i=0;i<selecoes.length;i++){
        var selecao = selecoes[i];
        var nome = selecao.classList[1]
        adiciona(nome).forEach(function(i){todas.push(i)})
    }
    
    return todas
}
