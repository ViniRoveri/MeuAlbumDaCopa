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
                card.classList.remove('invisivel')        
            }else{
                card.classList.add('invisivel')
            }

            var chequeClasse = document.querySelectorAll('.invisivel');
            if(chequeClasse.length==cards.length){aviso.textContent='Nenhum resultado encontrado.'}else{aviso.textContent=''}
        }
    }else{
        for(var i=0;i<cards.length;i++){
            var card = cards[i];
            card.classList.remove('invisivel');
        }
    }
})

// CONTADOR TOTAL DO ÁLBUM

const tenho = figurinhas()
document.querySelector('.total').querySelector('h2').textContent = tenho.length + '/678'