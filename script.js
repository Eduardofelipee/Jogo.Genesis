let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {
  let colorOrder = math.floor(math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = []; 

  for(let i in order)  {
     let elementColor = createColorElement(order[i]);
       ligthColor(elementColor, Number(i) + 1);

    }
    {
    
     let ligthColor = (element,  number) => {
         time = time * 500;
         setTimeout (() => {
        element.classList.add('selected')
         }, tempo - 250);
         setTimeout(() => {
             element.classList.remove('selected')
         });
     }  

     let clickedOrder = () => {

      for(let i in clickedOrder) {
          if(clickedOrder[i] != order[i]) {
              gameOver();
              breack;
          }
      }
      if(clickedOrder.length == order.length) {
          alert('pontuação: ${score}\nVocê acertou! Iniciando próximo nivel!');
          nextlevel();
      }
     }

    }

}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    creatementColor(color).classList.add ('selected');

    setTimeout (() => {
        elementColor(color).classList.remove('selected');
       
        checkOrder();
    },250)
        
    }

    let createColorElement = (color) => {
          if(color == 0) {
            return green;
        } else if(color == 1) {
            return red;
        } else if (color == 2) {
            return yellow;
        } else if (color == 3) {
            return blue;
        }
    }



    // função para o proximo nivel do jogo 


    let nextlevel =  () => {
        score++;
        shuffleOrder();
    }
     
     let gameOver = () => {
         alert('pontuação ; ${score}!\nVoçê perdeu o jogo"\nClique em Ok para iniciar um jogo novo')
       order = [];
        clickedOrder = [];

        playGame();
    }

    let playGame = () => {
        alert('Bem vindo ao Gênesis! Iniciando novo jogo!')
        score = 0;
        
        nextlevel();
    }
    
    //eventos de clique para as cores
   green.onclick = () => click (0);
   red.onclick = () => click (1);
   yellow.onclick = () => click (2);
   blue.onclick = () => click (3);

    
    

    playGame();