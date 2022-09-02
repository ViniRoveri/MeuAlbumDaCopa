'use strict'

// LISTA DE FIGURINHAS

const selecoes = {
    // !!!!! ADICIONAR AS FIGURINHAS AQUI !!!!!
    QAT: [4,8,11,16],
    ECU: [7,11],
    SEN: [6,7,8,20],
    NED: [10,13,15],
    ENG: [13,20],
    IRN: [3,20],
    USA: [1,6,19,20],
    WAL: [6,20],
    ARG: [4,8,9],
    KSA: [7,13],
    MEX: [],
    POL: [8,10,16,17],
    FRA: [5],
    AUS: [9,12,17],
    DEN: [11,13,19,20],
    TUN: [16],
    ESP: [14,16],
    CRC: [],
    GER: [],
    JPN: [],
    BEL: [1,3],
    CAN: [],
    MAR: [13,14,17,20],
    CRO: [11,16,17],
    BRA: [19],
    SRB: [7],
    SUI: [],
    CMR: [4,10],
    POR: [1,14,17],
    GHA: [],
    URU: [18],
    KOR: [],
    ZERO: [], // '00' PRECISA ESTAR DENTRO DE UMA STRING
    FWC: [8,11],
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

// CHECA PELA 00

const zero = document.querySelector('.zero')
if(zero && Object.entries(selecoes)[32][1].includes('00')){
    zero.classList.add('tenho')
}

// COMPLETADOS DE CADA SELEÇÃO

for(var i=0;i<=31;i++){
    var figurinha = Object.entries(selecoes)[i][1].length;
    var h2s = document.querySelectorAll('.completado');
    var h2 = h2s[i]
    h2.textContent = figurinha + '/20'
}

// COMPLETADOS ESPECIAIS

var totalEspeciais = 0;
for(var i=32;i<=34;i++){
    var figurinha = Object.entries(selecoes)[i][1].length;
    totalEspeciais = totalEspeciais + figurinha
}

var h2 = document.querySelector('.completado-especiais');
h2.textContent =  totalEspeciais + '/38'

// NOMEIA TODAS SELECOES PARA BANDEIRAS EM INDEX.JS

const todosCards = document.querySelectorAll('.card');
for(i=0;i<32;i++){
    var nome = Object.keys(selecoes)[i];
    var card = todosCards[i];
    card.style.backgroundImage = `linear-gradient(-50deg, rgba(24, 7, 14, 0.1), rgba(24, 7, 14, 0.6) 50%),url('img/bandeiras/${nome}.png')`;
}