function setup() {
  createCanvas(400, 400);
 palavra = palavraAleatoria();
} 

function palavraAleatoria(){
   let palavras = ["grau","Bike","esporte", "exercicio"];
 return random(palavras);
}

function inicializaCores(){
   background("white");
  fill("black");
  textSize(64);
  textAlign (CENTER,CENTER);
}

function draw() {
  inicializaCores();
  let maximo = width;
  let minimo = 0;
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200,200);
  
  
  /*if(mouseX < 50){ let palavra = "G";
  text(palavra, 200,200);
 }else if(mouseX <100){
   let palavra = "Gr";
   text (palavra, 200,200);
 } else if(mouseX <150){
   let palavra = "Gra";
   text (palavra, 200,200);
 } else if(mouseX <200){
   let palavra = "Grau";
   text (palavra, 200,200);
 }*/
} 
