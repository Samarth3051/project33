
var boy, boyimg;
//var ground, groundimg;
var rect;

var backgroundv,backgroundImg;
var snow=[]
var sound;
var snow, snowi;
var snow2, snowi2;

function preload(){
  backgroundImg = loadImage("snow2.jpg")
  boyimg = loadAnimation("child 1.png","child 2.png","child 3.png","child 4.png","child 5.png","child 6.png","child 7.png","child 8.png")
//  sound = loadSound("JoyMusic.mp3");
  snowi = loadImage("snow4.webp");
  snowi2 = loadImage("snow5.webp")
}
function setup() {
  createCanvas(800,400);

  

  backgroundv = createSprite(1,80,50,20);
  backgroundv.addImage("ground",backgroundImg);
  backgroundv.x = backgroundv.width /2;
  backgroundv.scale = 1.0;

  boy = createSprite(590,300,50,30);
  boy.addAnimation("boy",boyimg);
  boy.scale = 0.5;


  



 

}

function draw() {

  background("white");


  backgroundv.velocityX =- 3;

  if (backgroundv.x <10){
    backgroundv.x = backgroundv.width/2;
  }
  
 



if(frameCount%80==0){
    
 Snow();
}

if(frameCount%100==0){
    
  Snows();
 }


  
  drawSprites();
  
  //backgroundv.display();
  boy.display();
 
}

function Snow(){
  snow = createSprite(random(50,750),40,10,10);
  snow.addImage(snowi);
  snow.scale = 0.1;
  snow.velocityY = 3;
}

function Snows(){
  snow2 = createSprite(random(50,950),40,10,10);
  snow2.addImage(snowi2);
  snow2.scale = 0.1;
  snow2.velocityY = 3;
}

