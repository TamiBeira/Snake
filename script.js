window.onload = ()=>{
    canvas = document.querySelector('#canvas');
    ctx = canvas.getContext('2d');

    snake = [];
    positionX = 10;
    positionY = 10;
    foodX = 15;
    foodY = 15;
    velX = 0;
    velY = 0;
    grid = 20;
    tam = 3;

    //Chamada da função jogo a cada 100 milisegundos
    setInterval(jogo, 100)
}

function jogo(){
    //Configuração da tela
    ctx.fillStyle = "#2980B9"
    
    //distancia borda h, distancia v, largura, altura
    ctx.fillRect(0,0,canvas.width, canvas.height) 
}