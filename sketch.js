var bg;
var basket, basketImage, basketImage2;
var cake, cakeImage;
var cupcake, cupcakeImage;
var pie, pieImage;
var apple, appleImage;
var sweetsGroup, rottenGroup;
var cakeGroup, cupcakeGroup, pieGroup;
var score;
PLAY = 1;
END = 0;
LEVEL2 = 2;
var gameState = PLAY;
var basket2;


function preload() {
  bg = loadImage("images/jungle.jpg");
  basketImage = loadImage("images/basket2.png");
  cakeImage = loadImage("images/cake.png");
  cupcakeImage = loadImage("images/cupcake.png");
  pieImage = loadImage("images/pie.png");
  appleImage = loadImage("images/rotten.png");
  basketImage2 = loadAnimation("images/basket.png");
}

function setup() {
  createCanvas(1000, 800);

  basket = createSprite(400, 700, 40, 40);
  basket.addImage(basketImage);

  sweetsGroup = new Group();
  rottenGroup = new Group();
  cakeGroup = new Group();
  cupcakeGroup = new Group();
  pieGroup = new Group();

  score = 0;
}

function draw() {
  background(bg);
  
  textSize(20);
  text("Score: " + score, 900,20);

  if(gameState === PLAY){

  if(keyDown(LEFT_ARROW)){
    basket.x = basket.x-6;
  }

  if(keyDown(RIGHT_ARROW)){
    basket.x = basket.x+6;
  }

  if(cakeGroup.isTouching(basket)){
    cakeGroup.destroyEach();
    score = score+1;
  }

  if(cupcakeGroup.isTouching(basket)){
    cupcakeGroup.destroyEach();
    score = score+1;
  }

  if(pieGroup.isTouching(basket)){
    pieGroup.destroyEach();
    score = score+1;
  }
  // if(basket.isTouching(cupcake)){
  //   cupcake.destroy();
  //   score = score+1;
  // }
  // if(basket.isTouching(pie)){
  //   pie.destroy();
  //   score = score+1;
  // }

  if(score>5){
    rotten();
  }

  if(score>10){
    rotten();
  }
  if(score>15){
    rotten();
  }

  // if(gameState === LEVEL2){
  //   if(frameCount % 150 === 0){
  //     rotten();
  //     console.log("hi");
  //   }

  // }

  if(rottenGroup.isTouching(basket)){
    rottenGroup.destroyEach();
    score = score-1;
    gameState = END;
  }


  // sweets();
  cakes();
  cupcakes();
  pies();
  rotten();
}

  drawSprites();

  if(gameState === END){
    background(0);
    textSize(20);
    text("Score: " + score, 900,20);
    textSize(30);
    text("GAME OVER",400,400);
    text("Press r to reset the game", 350,600);
    reset();
    cakeGroup.destroyEach();
    cupcakeGroup.destroyEach();
    pieGroup.destroyEach();
  }

  if(score === 20){
    background("white");
    textSize(30);
    text("YOU WIN", 400,400);
  }

}

// function sweets(){
//   if(frameCount % 80 === 0){
  
//   //sweet = createSprite(Math.round(random(100,900)),0,20,20); 
//   var rand = Math.round(random(1,3));

//   switch(rand){
//     case 1: cake = createSprite(Math.round(random(100,900)),0,20,20);
//             cake.addImage(cakeImage);
//             cake.scale = 0.1;
//             cake.velocityY = 2;
//             break;
//     case 2: cupcake = createSprite(Math.round(random(100,900)),0,20,20);
//             cupcake.addImage(cupcakeImage);
//             cupcake.scale = 0.1;
//             cupcake.velocityY = 2;
//             break;
//     case 3: pie = createSprite(Math.round(random(100,900)),0,20,20);
//             pie.addImage(pieImage);
//             pie.scale = 0.1;
//             pie.velocityY = 2;
//             break;
//   }

  // sweet.scale = 0.1;
  // sweet.velocityY = 2;
  // sweet.lifetime = 400;

  //sweetsGroup.add(sweet);
//   }   
// }

function cakes(){
  if(frameCount % 200 === 0){
  cake = createSprite(Math.round(random(100,900)),0,20,20);
  cake.addImage(cakeImage);
  cake.scale = 0.1;
  cake.velocityY = 4;

  cakeGroup.add(cake);
}
}

function cupcakes(){
  if(frameCount % 190 === 0){
    cupcake = createSprite(Math.round(random(100,900)),0,20,20);
    cupcake.addImage(cupcakeImage);
    cupcake.scale = 0.1;
    cupcake.velocityY = 5;

    cupcakeGroup.add(cupcake);
  }
}

function pies(){
  if(frameCount % 220 === 0){
    pie = createSprite(Math.round(random(100,900)),0,20,20);
    pie.addImage(pieImage);
    pie.scale = 0.1;
    pie.velocityY = 3;

    pieGroup.add(pie);
  }
}

function rotten(){
  if(frameCount % 220 === 0){
    apple = createSprite(Math.round(random(50,950)),0,20,20);
    apple.addImage(appleImage);
    apple.scale = 0.15;
    apple.velocityY = 3;
    apple.lifetime = 400;

    rottenGroup.add(apple);
  }
}

function reset(){
  if(keyDown("r")){
    gameState = PLAY;
    score = 0;
  }
}

