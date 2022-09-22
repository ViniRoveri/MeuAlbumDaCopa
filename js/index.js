'use strict'

// BARRA DE PESQUISA

const pesquisa = document.querySelector('input');
const cards = document.querySelectorAll('.card');
const aviso = document.querySelector('.aviso');

pesquisa.addEventListener('input',function(){
    if(this.value.length>0){
        for(var i=0;i<cards.length;i++){       
            var card = cards[i];
            var nome = card.querySelector('h1').textContent;
            var sigla = card.querySelector('h2').textContent;
            
            var expressao = new RegExp(this.value,'i');

            if(expressao.test(nome)||expressao.test(sigla)){
                card.parentNode.classList.remove('invisivel')        
            }else{
                card.parentNode.classList.add('invisivel')
            }

            var chequeClasse = document.querySelectorAll('.invisivel');
            if(chequeClasse.length==cards.length){aviso.textContent='Nenhum resultado encontrado.'}else{aviso.textContent=''}
        }
    }else{
        for(var i=0;i<cards.length;i++){
            var card = cards[i];
            card.parentNode.classList.remove('invisivel');
        }
    }
})

// CONTADOR TOTAL DO ÁLBUM

const tenho = total()
document.querySelector('.total').querySelector('h2').textContent = tenho + '/678'

// BOTÃO DE VOLTAR AO TOPO

const botaoTopo = document.querySelector(".botao-topo");
botaoTopo.addEventListener('click',topo)

document.addEventListener('scroll', ()=>{
    if(window.scrollY>500 && window.scrollY<6400){
        botaoTopo.style.visibility = "visible";
    }else{
        botaoTopo.style.visibility = "hidden";
    } 
})

// BOTÃO DE IR AO FINAL

const botaoFim = document.querySelector(".botao-fim");
botaoFim.addEventListener('click',fim)

document.addEventListener('scroll', ()=>{
    if(window.scrollY == 0){
        botaoFim.style.visibility = "visible";
    }else{
        botaoFim.style.visibility = "hidden";
    } 
})

// FUNÇÕES DE SCROLL

function topo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function fim() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

// COMPLETADOS DE CADA SELEÇÃO

const h2Completadas = document.querySelectorAll('.completado');

for(var i=0;i<32;i++){
    var figurinhasDoPais = Object.values(selecoes)[i].length;
    var h2Atual = h2Completadas[i]
    h2Atual.textContent = figurinhasDoPais + '/20'
}

// COMPLETADOS DAS ESPECIAIS

var totalEspeciais = 0;

for(var i=32;i<=34;i++){
    var figurinhasDaLinha = Object.values(selecoes)[i].length;
    totalEspeciais += figurinhasDaLinha
}

document.querySelector('.completado-especiais').textContent = totalEspeciais+'/38';

// COLOCA BANDEIRAS NOS CARDS

for(var i=0;i<32;i++){
    var nome = Object.keys(selecoes)[i];
    var card = cards[i];
    card.style.backgroundImage = `linear-gradient(-50deg, rgba(24, 7, 14, 0.1), rgba(24, 7, 14, 0.6) 50%),url('img/bandeiras/${nome}.png')`;
}

