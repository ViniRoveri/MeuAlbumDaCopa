'use strict'

// LISTA DE FIGURINHAS

const selecoes = {
    // !!!!! ADICIONAR AS FIGURINHAS AQUI !!!!!
    QAT: [4,8,16],
    ECU: [],
    SEN: [],
    NED: [],
    ENG: [],
    IRN: [],
    USA: [],
    WAL: [],
    ARG: [],
    KSA: [],
    MEX: [],
    POL: [],
    FRA: [],
    AUS: [],
    DEN: [],
    TUN: [],
    ESP: [],
    CRC: [],
    GER: [],
    JPN: [],
    BEL: [],
    CAN: [],
    MAR: [],
    CRO: [],
    BRA: [],
    SRB: [],
    SUI: [],
    CMR: [],
    POR: [],
    GHA: [],
    URU: [],
    KOR: [],
    FWC: [],
    C: []
}

// INFORMA AS FIGURINHAS POR PAÍS

function adiciona(EXP){
    var pais = selecoes[EXP]
    var retorno = []
    for(var i=0;i<pais.length;i++){
        var numero = pais[i]
        var figurinha = EXP + numero
        retorno.push(figurinha)
    }

    return retorno
}

// INFORMA TODAS AS FIGURINHAS DA PÁGINA

function figurinhas(){
    var todas = []

    var selecoes = document.querySelectorAll('.selecao');
    for(var i=0;i<selecoes.length;i++){
        var selecao = selecoes[i];
        var nome = selecao.classList[1];
        if(selecao.classList.length===3){
            var nome2 = selecao.classList[2];
            adiciona(nome2).forEach(function(i){todas.push(i)})
        }
        adiciona(nome).forEach(function(i){todas.push(i)});
    }
    
    return todas
}

// CALCULA O TOTAL DE FIGURINHAS

function total(){
    var total = 0;

    for(var i=0;i<Object.entries(selecoes).length;i++){
        var pais = Object.entries(selecoes)[i][1].length;
        total = total + pais
    }

    return total
}
