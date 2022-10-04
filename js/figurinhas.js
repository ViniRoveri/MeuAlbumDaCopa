'use strict'

const selecoes = {
    // !!!!! ADICIONAR AS FIGURINHAS AQUI !!!!!
    QAT: [4,8,11,16,19],
    ECU: [1,6,7,11,12,14,15,19,20],
    SEN: [1,5,6,7,8,17,20],
    NED: [10,13,15,18],
    ENG: [1,3,4,9,13,16,17,19,20],
    IRN: [3,15,20],
    USA: [1,3,6,15,19,20],
    WAL: [3,5,6,14,19,20],
    ARG: [1,4,5,8,9,18],
    KSA: [3,7,10,13,15,16,19],
    MEX: [6,7,11,15],
    POL: [1,3,8,10,16,17],
    FRA: [5,6,7,8,9,11,14,15,16],
    AUS: [1,6,9,10,12,17,19],
    DEN: [4,5,11,12,13,17,19,20],
    TUN: [1,4,8,9,10,11,14,16],
    ESP: [3,5,9,10,14,16,19],
    CRC: [4,7,8,10,11,12,13,20],
    GER: [5,7,9,10,13,17,19],
    JPN: [4,6,7,9,17,19],
    BEL: [1,3,4,5,10,11,12,14,15],
    CAN: [1,3,6,8,14,17,19],
    MAR: [8,13,14,17,18,19,20],
    CRO: [3,5,11,12,13,14,16,17],
    BRA: [5,16,19],
    SRB: [4,7,12,13,17],
    SUI: [10,12,14,18,19],
    CMR: [4,5,10,13,19,20],
    POR: [1,3,6,10,14,17,18],
    GHA: [],
    URU: [10,16,17,18],
    KOR: [6,8,18,19,20],
    FWC: [8,11,12,13,14,17,18],
    C: [],
    ZERO: ['00'] // PASSAR O '00' ENTRE STRINGS !!!
}

// CRIA NOME DAS FIGURINHAS DO PAÍS

function criaNome(sigla){
    var criadas = []

    var pais = selecoes[sigla]
    for(var i=0;i<pais.length;i++){
        var numero = pais[i]
        var figurinha = sigla + numero
        criadas.push(figurinha)
    }

    return criadas
}

// CRIA ARRAY COM TODAS AS FIGURINHAS DO PAÍS

function figurinhas(){
    var todas = []

    criaNome(sigla).forEach(i=>todas.push(i));

    if(selecao.classList.length===3){
        var nome2 = selecao.classList[2];
        criaNome(nome2).forEach(i=>todas.push(i))
        if(temZero){todas.push('zero')}
    }

    return todas
}

// CALCULA O TOTAL GERAL DE FIGURINHAS

function total(){
    var total = 0;

    for(var i=0;i<Object.entries(selecoes).length-1;i++){
        var totalPais = Object.values(selecoes)[i].length;
        total += totalPais
    }

    if(temZero){total++}

    return total
}

// CHECA PELA 00

const figurinhaZero = document.querySelector('.zero');
const lugarDaZero = selecoes['ZERO'][0];
var temZero = false
if(lugarDaZero === '00'){
    temZero = true;
    if(figurinhaZero){
        figurinhaZero.classList.add('tenho');
    }
}
