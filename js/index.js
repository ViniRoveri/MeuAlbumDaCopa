'use strict'

// BARRA DE PESQUISA

const pesquisa = document.querySelector('input');
const cards = document.querySelectorAll('.card');
const aviso = document.querySelector('.aviso');

pesquisa.addEventListener('input',function(){
    if(this.value.length>0){
        for(var i=0;i<cards.length;i++){       
            var card = cards[i];
            var cardH1 = card.querySelector('h1');
            var cardH2 = card.querySelector('h2');
            var nome = cardH1.textContent;
            var sigla = cardH2.textContent;
            
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

document.addEventListener('scroll', function(){
    if (window.scrollY > 500) {
        botaoTopo.style.visibility = "visible";
    } else {
        botaoTopo.style.visibility = "hidden";
    } 
})

// BOTÃO DE IR AO FINAL

const botaoFim = document.querySelector(".botao-fim");
botaoFim.addEventListener('click',fim)

document.addEventListener('scroll', function(){
    if (window.scrollY == 0) {
        botaoFim.style.visibility = "visible";
    } else {
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