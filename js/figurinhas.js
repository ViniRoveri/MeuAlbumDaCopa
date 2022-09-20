'use strict'

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
    FWC: [8,11],
    C: [],
    ZERO: [] // PASSAR O '00' ENTRE STRINGS !!!
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

// CHECA SE ESTÁ NO INDEX

var estaNoIndex = false;
if(document.getElementById('index')){estaNoIndex=true}

// COMPLETADOS DE CADA SELEÇÃO EM INDEX.JS

if(estaNoIndex){
    const h2Completadas = document.querySelectorAll('.completado');

    for(var i=0;i<32;i++){
        var figurinhasDoPais = Object.values(selecoes)[i].length;
        var h2Atual = h2Completadas[i]
        h2Atual.textContent = figurinhasDoPais + '/20'
    }
}

// COMPLETADOS DAS ESPECIAIS EM INDEX.JS

if(estaNoIndex){
    var totalEspeciais = 0;

    for(var i=32;i<=34;i++){
        var figurinhasDaLinha = Object.values(selecoes)[i].length;
        totalEspeciais += figurinhasDaLinha
    }

    document.querySelector('.completado-especiais').textContent = totalEspeciais+'/38'
}

// NOMEIA TODAS SELECOES PARA BANDEIRAS EM INDEX.JS

if(estaNoIndex){
    const cards = document.querySelectorAll('.card');
    for(i=0;i<32;i++){
        var nome = Object.keys(selecoes)[i];
        var card = cards[i];
        card.style.backgroundImage = `linear-gradient(-50deg, rgba(24, 7, 14, 0.1), rgba(24, 7, 14, 0.6) 50%),url('img/bandeiras/${nome}.png')`;
    }
}