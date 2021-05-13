var bird;
var scenery;
var gameState=1;
var PLAY=1;
var END=0;
var gameOverImage;
var distance=0;


function preload(){
birdImage=loadImage("bird.png");
sceneryImage=loadImage("scenery.png");
groundImage=loadImage("ground.png");
barImage=loadImage("bar1.png");
baImage=loadImage("ba.png");
gameOverImage=loadImage("gameOver.png");
}

function setup() {
	createCanvas(1000, 600);

bargroup= new Group();
bagroup= new Group();

scenery=createSprite(530,303);
scenery.addImage("scenery",sceneryImage);
scenery.scale=1.2;

bird=createSprite(300,300);
bird.addImage("bird",birdImage);
bird.scale=0.3;

ground=createSprite(900,900);
ground.addImage("ground",groundImage);
ground.scale=2.4;

gameOver=createSprite(500,300);
gameOver.addImage("gameOver",gameOverImage);
gameOver.scale=4.5;
}


function draw() {
  background(0);

  if(gameState===PLAY){
    if(keyDown("space")){
      bird.velocityY=-12;
    }
  
    bird.velocityY=bird.velocityY+0.99;
  
    bird.collide(ground);
    ground.velocityX= -6;
    if(ground.x<0){
      ground.x=ground.width/2;
    }
    if(bird.isTouching(bargroup)){
      bird.visible=false
      gameState=END;
    }
    if(bird.isTouching(bagroup)){
      bird.visible=false
      gameState=END;
    }
    gameOver.visible=false;
    distance = distance+Math.round(getFrameRate()/50)
  }
if(gameState===END){
  bargroup.destroyEach();
  bagroup.destroyEach();
  ground.destroy();
  gameOver.visible=true;
  ba.visible=false;
  bar.visible=false;
  bagroup.setVelocityYEach(0);
  bargroup.setVelocityYEach(0);

}
  bar();
  ba();
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
}
function bar(){
  if(frameCount%60===0){
	bars=createSprite(1100,Math.round(random(900,700)))
	bars.addAnimation("bar",barImage);
	bars.velocityX=-6;
  bars.scale=0.6;
	bargroup.add(bars);

	}
}
function ba(){
  if(frameCount%60===0){
	bas=createSprite(1100,Math.round(random(-200,10)))
	bas.addAnimation("ba",baImage);
	bas.velocityX=-6;
  bas.scale=0.6;
	bagroup.add(bas);
	}
}






