'use strict'

const selecoes = {
    // !!!!! ADICIONAR AS FIGURINHAS AQUI !!!!!
    QAT: [3,4,5,7,8,9,11,12,13,14,16,17,19,20],
    ECU: [1,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20],
    SEN: [1,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    NED: [1,4,6,7,8,9,10,11,12,13,14,15,17,18,19],
    ENG: [1,3,4,6,7,9,12,13,15,16,17,18,19,20],
    IRN: [3,4,6,8,9,10,11,12,14,15,17,18,19,20],
    USA: [1,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20],
    WAL: [3,4,5,6,7,10,11,12,13,14,15,16,17,18,19,20],
    ARG: [1,4,5,7,8,9,10,13,17,18,19,20],
    KSA: [1,3,4,6,7,8,10,11,13,14,15,16,17,19,20],
    MEX: [1,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20],
    POL: [1,3,4,5,6,8,9,10,11,12,13,14,16,17,18,20],
    FRA: [1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    AUS: [1,3,5,6,7,8,9,10,12,14,15,17,18,19,20],
    DEN: [1,4,5,6,8,10,11,12,13,14,16,17,18,19,20],
    TUN: [1,4,7,8,9,10,11,12,14,15,16,17,19],
    ESP: [1,3,4,5,6,7,8,9,10,11,13,14,16,18,19,20],
    CRC: [3,4,6,7,8,10,11,12,13,15,16,17,20],
    GER: [1,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20],
    JPN: [1,3,4,6,7,8,9,10,11,12,13,14,15,17,18,19,20],
    BEL: [1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20],
    CAN: [1,3,6,7,8,10,11,12,13,14,15,17,18,19,20],
    MAR: [1,4,5,7,8,9,12,13,14,17,18,19,20],
    CRO: [1,3,4,5,6,7,8,9,10,11,12,13,14,16,17,19,20],
    BRA: [1,3,5,6,7,9,10,13,14,15,16,17,18,19,20],
    SRB: [1,4,5,7,8,9,10,11,12,13,14,15,17,18,20],
    SUI: [3,5,6,8,9,10,12,13,14,15,17,18,19],
    CMR: [4,5,6,8,9,10,11,13,14,15,19,20],
    POR: [1,3,5,6,7,8,9,10,11,13,14,16,17,18,20],
    GHA: [3,4,5,6,7,11,13,16,17,18,19],
    URU: [3,5,6,7,10,11,14,16,17,18,19,20],
    KOR: [1,3,5,6,7,8,9,13,14,15,16,18,19,20],
    FWC: [2,3,4,6,7,8,9,11,12,13,14,15,16,17,18],
    C: [1,4],
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
//TESTE
