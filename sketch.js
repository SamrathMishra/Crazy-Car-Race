var bgimage;
var startbutton,choosecarbutton;
var startbuttonimg,choosecarbuttonimg;
var gameState ="serve";
var car1img,car2img,car3img,car4img,car5img;
var car1,car2,car3,car4,car5;
var garimg;

function preload(){
  bgimage = loadImage("photos/background.png");
  startbuttonimg = loadImage("photos/startbutton.png");
  choosecarbuttonimg = loadImage("photos/choosecarbutton.png");

  car1img = loadImage("photos/car1.png");
  car2img = loadImage("photos/car2.png");
  car3img = loadImage("photos/car3.png");
  car4img = loadImage("photos/car4.png");
  car5img = loadImage("photos/car5.png");
  garimg = loadImage("photos/gar.png");
}
function setup() {
  createCanvas(1915,802);
  startbutton = createSprite(1400,160,10,10);
  startbutton.addImage("start",startbuttonimg);
  choosecarbutton = createSprite(1400,360,10,10);
  choosecarbutton.addImage("start",choosecarbuttonimg);
  
  
  car1 = createSprite(250,540);
  car1.addImage ("car1",car1img);
  car1.scale = 0.5;
  car2 = createSprite(600,520);
  car2.addImage ("car2",car2img);
  car2.scale = 1.0;
  car3 = createSprite(950,540);
  car3.addImage ("car3",car3img);
  car3.scale = 0.5;
  car4 = createSprite(1300,540);
  car4.addImage ("car4",car4img);
  car4.scale = 0.5;
  car5 = createSprite(1650,540);
  car5.addImage ("car5",car5img);
  car5.scale = 0.5;
  car5.visible = false;
  car1.visible = false;
  car2.visible = false;
  car3.visible = false;
  car4.visible = false;
}

function draw() {
  if(gameState==="serve"){
  background(bgimage);
  }
  else if(gameState ==="play"){
    background(garimg);
  }
  text(mouseX+","+mouseY,mouseX,mouseY);
  drawSprites();

  if(mousePressedOver(choosecarbutton)){
    startbutton.visible= false;
    choosecarbutton.visible = false;
    gameState= "play";
  }
  if(gameState === "play"){
    
    car5.visible = true;
    car1.visible = true;
    car2.visible = true;
    car3.visible = true;
    car4.visible = true; 
  }
 
  if(mousePressedOver(startbutton)){
    gameState ="letsgo";
  }
  if(gameState ==="letsgo"){
    
  }
}